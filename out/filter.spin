# @filter
<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        <http://hl7.org/fhir/ServiceRequest> ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
                            <http://spinrdf.org/sp#subject>
        _:b1
                          ] [ <http://spinrdf.org/sp#object>
        _:b2 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/code> ;
                            <http://spinrdf.org/sp#subject>
        _:b1
                          ] [ <http://spinrdf.org/sp#object>
        _:b3 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/concept> ;
                            <http://spinrdf.org/sp#subject>
        _:b2
                          ] [ <http://spinrdf.org/sp#object>
        _:b4 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/coding> ;
                            <http://spinrdf.org/sp#subject>
        _:b3
                          ] [ <http://spinrdf.org/sp#object>
        _:b5 ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> ;
                            <http://spinrdf.org/sp#subject>
        _:b4
                          ] [ <http://spinrdf.org/sp#object>
        _:b6 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/system> ;
                            <http://spinrdf.org/sp#subject>
        _:b5
                          ] [ <http://spinrdf.org/sp#object>
        "http://snomed.org/sct"^^<http://www.w3.org/2001/XMLSchema#anyURI> ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/v> ;
                            <http://spinrdf.org/sp#subject>
        _:b6
                          ] [ <http://spinrdf.org/sp#object>
        _:b7 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/code> ;
                            <http://spinrdf.org/sp#subject>
        _:b5
                          ] [ <http://spinrdf.org/sp#object>
        "69363007" ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/v> ;
                            <http://spinrdf.org/sp#subject>
        _:b7
                          ] [ <http://spinrdf.org/sp#object>
        () ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> ;
                            <http://spinrdf.org/sp#subject>
        _:b4
                          ] [ <http://spinrdf.org/sp#object>
        _:b8 ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/text> ;
                            <http://spinrdf.org/sp#subject>
        _:b3
                          ] [ <http://spinrdf.org/sp#object>
        "Zika virus NAAT on serum" ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/v> ;
                            <http://spinrdf.org/sp#subject>
        _:b8
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#isPregnant> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "symptom"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#hasZikaSymptom> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#possibleZikaExposure> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#avgTimeSinceZikaSymptomsOnset> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#Filter> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#lt> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "timeSince"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  7257600000
        ]
                          ])
              ] .


