<http://www.w3.org/2002/07/owl#Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#isPregnant> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        <http://hl7.org/fhir/Patient> ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasCondition> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        77386006 ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/code> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        "active" ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/clinicalStatus> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        "confirmed" ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/verificationStatus> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ])
              ] .
