[ a  <http://spinrdf.org/sp#Construct> ;
  <http://spinrdf.org/sp#templates>
          ( [ <http://spinrdf.org/sp#object>  <http://example.org/z> ;
              <http://spinrdf.org/sp#predicate>
                      <http://example.org/y> ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "x" ]
            ]
          ) ;
  <http://spinrdf.org/sp#where>  ( [ <http://spinrdf.org/sp#object>  "''}SELECT" ;
         <http://spinrdf.org/sp#predicate>
                 <http://example.org/b> ;
         <http://spinrdf.org/sp#subject>
                 [ <http://spinrdf.org/sp#varName>
                           "x" ]
       ]
       [ a  <http://spinrdf.org/sp#SubQuery> ;
         <http://spinrdf.org/sp#query>  [ a  <http://spinrdf.org/sp#Select> ;
              <http://spinrdf.org/sp#resultVariables>
                      ( [ <http://spinrdf.org/sp#varName>
      "x" ]
                      ) ;
              <http://spinrdf.org/sp#where>  ()
            ]
       ]
     )
] .
[ a  <http://spinrdf.org/sp#Select> ;
  <http://spinrdf.org/sp#resultVariables>
          ( [ <http://spinrdf.org/sp#varName>
                      "SELECT" ]
            [ <http://spinrdf.org/sp#expression>
                      [ a <http://spinrdf.org/sp#in> ;
                        <http://spinrdf.org/sp#arg1>  [ <http://spinrdf.org/sp#varName>
              "x" ] ;
                        <http://spinrdf.org/sp#arg2>  "{"
                      ] ;
              <http://spinrdf.org/sp#varName>
                      "CONSTRUCT"
            ]
          ) ;
  <http://spinrdf.org/sp#where>  ( [ <http://spinrdf.org/sp#object>  "\\\"{" ;
         <http://spinrdf.org/sp#predicate>
                 <http://example.org/b> ;
         <http://spinrdf.org/sp#subject>
                 [ <http://spinrdf.org/sp#varName>
                           "x" ]
       ]
     )
] .
[ a  <http://spinrdf.org/sp#Construct> ;
  <http://spinrdf.org/sp#templates>
          ( [ <http://spinrdf.org/sp#object>  [ <http://spinrdf.org/sp#varName>
    "z" ] ;
              <http://spinrdf.org/sp#predicate>
                      [ <http://spinrdf.org/sp#varName>
    "y" ] ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "x" ]
            ]
          ) ;
  <http://spinrdf.org/sp#where>  ( [ <http://spinrdf.org/sp#object>  [ <http://spinrdf.org/sp#varName>
                           "x" ] ;
         <http://spinrdf.org/sp#predicate>
                 [ <http://spinrdf.org/sp#varName>
                           "y" ] ;
         <http://spinrdf.org/sp#subject>
                 [ <http://spinrdf.org/sp#varName>
                           "z" ]
       ]
     )
] .
