#! /bin/bash

#!/bin/bash
usage()
{
	echo -e "usage: explain.sh [-e|--eye]* [-d|--data] [-r|--rules]* ([-l|--labels]) [-q|--query_proof] [-x|--xexplain] [-i|--inf_out] [-p|--pe_out]\n"
}

if [ "$1" == "" ]; then
	usage
	exit 1
fi

aux_query_top=lib/eye/explain/aux_query_top.n3
aux_query_all=lib/eye/explain/aux_query_all.n3
query_heads=lib/eye/explain/query_heads.n3
query_xexplain=lib/eye/explain/query_xexplain.n3
describe=lib/eye/explain/describe.n3
collect=lib/eye/explain/collect.n3
query_html=lib/eye/explain/query.n3

xexplain=0
inf_out=inf_out.ttl
pe_out=pe_out.ttl
target_out=target_out.ttl
labels=

while [ "$1" != "" ]; do
    case $1 in
	-e | --eye )				shift
								eye=$1
								;;
	-d | --data )				shift
								data=$1
								;;
    -r | --rules ) 				shift
								rules=$1
								;;
	-l | --labels ) 			shift
								labels=$1
								;;
	-q | --query_proof ) 		shift
								query_proof=$1
								;;
	-x | --xexplain )			xexplain=1
								;;
	-i | --inf_out )			shift
								inf_out=$1
								;;
	-p | --pe_out )				shift
								pe_out=$1
								;;
    -h | --help )           	usage
                                exit
                                ;;
	* )                     	usage
                                exit 1
    esac
    shift
done

if [ -z "$eye" ] || [ -z "$rules" ]; then
	usage
	exit 1
fi

# - print proof

if [ ! -z "$data" ]; then
	rules="$data $rules"
fi

# - use query
if [ -z "$query_proof" ]; then
	# -- prove x:Explain triples
	if [ $xexplain -eq 1 ]; then
		# query for x:Explain properties
		$($eye --nope --n3 $rules --query $query_xexplain > $target_out)
		# (print all inferences)
		aux=$aux_query_all
	# -- prove rule head triples
	else
		# query for all rule heads
		$($eye --nope --n3 $rules --query $query_heads > $target_out)
		# (print top-level inferences)
		aux=$aux_query_top
	fi	
	# prove either x:Explain triples or rule head triples	
	query_proof=$target_out
else
	aux=$aux_query_all
fi
$($eye --n3 $rules --query $query_proof > $pe_out)


# - print html

$eye --strings --n3 $labels $pe_out $aux $describe $collect --query $query_html