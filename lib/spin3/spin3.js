let { promiseExec } = require('../cmd_util.js')
let { config } = require('../../config.js')
let fs = require('fs/promises')
let { clean } = require('../eye/eye.js')

const out = config.out;
const folder = config.tools.spin3.folder;
const sparql2spin = config.tools.triplify.exec

exports.exec = async function(options, data, query) {    
    // const subTask = options.subTask;

    const times = []

    let start = performance.now()
    let cmd = `java -jar ${sparql2spin} -sparql ${query} -multi;`
    const [ spin_output,  ] = await promiseExec(cmd);
    let end = performance.now()
    times.push(`generate spin: ${parseFloat(end - start).toFixed(0)}`)

    const [ info, filters, queries ] = parseSpinOutput(spin_output);

    const query_file = `${out}/query.spin`
    await fs.writeFile(query_file, queries);

    let filter_file;  
    if (filters != null) {
        filter_file = `${out}/filter.spin`
        await fs.writeFile(filter_file, filters);
    }

    let n3_query_file = `${out}/n3query.n3`
    await generateN3(query_file, n3_query_file, 'queries', times)

    let n3_filter_file;
    if (filters != null) {    
        n3_filter_file = `${out}/n3filter.n3`
        await generateN3(filter_file, n3_filter_file, 'filters', times)
    } else
        n3_filter_file = n3_query_file;

    let eyeCmd = `eye ${folder}/auxiliary-files/runtime.n3 ${data} ${n3_query_file} --query ${n3_filter_file} --nope`
    // switch (subTask) {
    //     case 'derivations':
    //         eyeCmd += " --pass-only-new"
    //         break
    //     case 'deductive_closure':
    //         eyeCmd += " --pass-all"
    //         break
    // }
    cmd = `${eyeCmd} 2>/dev/null;`
    // console.log(cmd)
    
    start = performance.now()
    let [ output, ] = await promiseExec(cmd);
    end = performance.now()
    times.push(`execute n3: ${parseFloat(end - start).toFixed(0)}`)

    output = clean(output, data)

    return { 
        data: output,
        times: times,
        info: info,
        spin: "out/query.spin",
        n3: "out/n3query.n3"
    }
}

async function generateN3(input_file, output_file, label, times) {
    let cmd = `eye ${input_file} ${folder}/auxiliary-files/aux.n3 --query ${folder}/queries/query_general.n3 --nope --quantify http://eyereasoner.github.io/.well-known/genid/ > ${output_file} 2>/dev/null;`
    let start = performance.now()
    await promiseExec(cmd);
    let end = performance.now()
    times.push(`generate ${label} n3: ${parseFloat(end - start).toFixed(0)}`)
}

function parseSpinOutput(str) {
    const delimit = "\n\n";
    const idx = str.indexOf(delimit);

    const prologue = str.substring(0, idx);
    const numConstructs = prologue.match(/# constructs: (\d+)/)[1];
    const numFilters = prologue.match(/# filters: (\d+)/)[1];

    console.log("num", numConstructs, numFilters);
    let filters = null, queries;
    if (numFilters > 0) {
        const delimit2 = "# - FILTERS:end\n\n";

        const idx2 = str.indexOf(delimit2);
        filters = str.substring(idx + delimit.length, idx2);
        queries = str.substring(idx2 + delimit2.length)

    } else 
        queries = str.substring(idx + delimit.length);

    return [ {
        numConstructs: numConstructs,
        numFilters: numFilters

    }, filters, queries ];
}