<http://example.org/Class>
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


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#hasZikaSymptom> ;
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
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "code"
        ] ;
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
                          ] [ a       <http://spinrdf.org/sp#Filter> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#in> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "code"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  84387000 ;
          <http://spinrdf.org/sp#arg3>
                  271749004 ;
          <http://spinrdf.org/sp#arg4>
                  47725002 ;
          <http://spinrdf.org/sp#arg5>
                  57676002 ;
          <http://spinrdf.org/sp#arg6>
                  9826008 ;
          <http://spinrdf.org/sp#arg7>
                  68962001 ;
          <http://spinrdf.org/sp#arg8>
                  25064002
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#residentOfZikaArea> ;
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
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  [ a       <http://spinrdf.org/sp#SeqPath> ;
                    <http://spinrdf.org/sp#path1>
                            <http://hl7.org/fhir/address> ;
                    <http://spinrdf.org/sp#path2>
                            <http://hl7.org/fhir/country>
                  ] ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#hasZikaArea> ;
                            <http://spinrdf.org/sp#subject>
        <http://example.org/zika#world>
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#recentTravelToZikaArea> ;
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
                  "o"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasObservation> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        420008001 ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/code> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "cmp"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  [ a       <http://spinrdf.org/sp#SeqPath> ;
                    <http://spinrdf.org/sp#path1>
                            <http://hl7.org/fhir/component> ;
                    <http://spinrdf.org/sp#path2>
                            [ a       <http://spinrdf.org/sp#ModPath> ;
  <http://spinrdf.org/sp#modMax>
          -2 ;
  <http://spinrdf.org/sp#modMin>
          0 ;
  <http://spinrdf.org/sp#subPath>
          <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest>
                            ]
                  ] ;
          <http://spinrdf.org/sp#path2>
                  <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        "LOC" ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/code> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "cmp"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  [ a       <http://spinrdf.org/sp#SeqPath> ;
                    <http://spinrdf.org/sp#path1>
                            [ a       <http://spinrdf.org/sp#SeqPath> ;
  <http://spinrdf.org/sp#path1>
          [ a       <http://spinrdf.org/sp#SeqPath> ;
            <http://spinrdf.org/sp#path1>
                    [ a       <http://spinrdf.org/sp#SeqPath> ;
                      <http://spinrdf.org/sp#path1>
                              <http://hl7.org/fhir/extension> ;
                      <http://spinrdf.org/sp#path2>
                              [ a       <http://spinrdf.org/sp#ModPath> ;
    <http://spinrdf.org/sp#modMax>
            -2 ;
    <http://spinrdf.org/sp#modMin>
            0 ;
    <http://spinrdf.org/sp#subPath>
            <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest>
                              ]
                    ] ;
            <http://spinrdf.org/sp#path2>
                    <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
          ] ;
  <http://spinrdf.org/sp#path2>
          <http://hl7.org/fhir/value>
                            ] ;
                    <http://spinrdf.org/sp#path2>
                            <http://hl7.org/fhir/country>
                  ] ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "cmp"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#hasZikaArea> ;
                            <http://spinrdf.org/sp#subject>
        <http://example.org/zika#world>
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#timeSinceObsEnd> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "cmp"
        ]
                          ] [ a       <http://spinrdf.org/sp#Filter> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#lt> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "timeSince"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  2678400000
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#hasZikaArea> ;
                            <http://spinrdf.org/sp#subject>
        <http://example.org/zika#world>
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "country"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/country> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "x"
        ]
                          ] [ a       <http://spinrdf.org/sp#Filter> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#in> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "country"
                  ] ;
          <http://spinrdf.org/sp#arg10>
                  "Barbados" ;
          <http://spinrdf.org/sp#arg11>
                  "Belize" ;
          <http://spinrdf.org/sp#arg12>
                  "Bolivia" ;
          <http://spinrdf.org/sp#arg13>
                  "Bonaire" ;
          <http://spinrdf.org/sp#arg14>
                  "Brazil" ;
          <http://spinrdf.org/sp#arg15>
                  "British Virgin Islands" ;
          <http://spinrdf.org/sp#arg16>
                  "Burkina Faso" ;
          <http://spinrdf.org/sp#arg17>
                  "Burma" ;
          <http://spinrdf.org/sp#arg18>
                  "Burundi" ;
          <http://spinrdf.org/sp#arg19>
                  "Cambodia" ;
          <http://spinrdf.org/sp#arg2>
                  "American Samoa" ;
          <http://spinrdf.org/sp#arg20>
                  "Cameroon" ;
          <http://spinrdf.org/sp#arg21>
                  "Cape Verde" ;
          <http://spinrdf.org/sp#arg22>
                  "Cayman Islands" ;
          <http://spinrdf.org/sp#arg23>
                  "Central African Republic" ;
          <http://spinrdf.org/sp#arg24>
                  "Colombia" ;
          <http://spinrdf.org/sp#arg25>
                  "Cook Islands" ;
          <http://spinrdf.org/sp#arg26>
                  "Costa Rica" ;
          <http://spinrdf.org/sp#arg27>
                  "Cuba" ;
          <http://spinrdf.org/sp#arg28>
                  "Curacao" ;
          <http://spinrdf.org/sp#arg29>
                  "Dominica" ;
          <http://spinrdf.org/sp#arg3>
                  "Angola" ;
          <http://spinrdf.org/sp#arg30>
                  "Dominican Republic" ;
          <http://spinrdf.org/sp#arg31>
                  "Easter Island" ;
          <http://spinrdf.org/sp#arg32>
                  "Ecuador" ;
          <http://spinrdf.org/sp#arg33>
                  "El Salvador" ;
          <http://spinrdf.org/sp#arg34>
                  "Ethiopia" ;
          <http://spinrdf.org/sp#arg35>
                  "Federated States of Micronesia" ;
          <http://spinrdf.org/sp#arg36>
                  "Fiji" ;
          <http://spinrdf.org/sp#arg37>
                  "France" ;
          <http://spinrdf.org/sp#arg38>
                  "French Guiana" ;
          <http://spinrdf.org/sp#arg39>
                  "French Polynesia" ;
          <http://spinrdf.org/sp#arg4>
                  "Anguilla" ;
          <http://spinrdf.org/sp#arg40>
                  "Gabon" ;
          <http://spinrdf.org/sp#arg41>
                  "Grenada" ;
          <http://spinrdf.org/sp#arg42>
                  "Guadeloupe" ;
          <http://spinrdf.org/sp#arg43>
                  "Guatemala" ;
          <http://spinrdf.org/sp#arg44>
                  "Guinea-Bissau" ;
          <http://spinrdf.org/sp#arg45>
                  "Guyana" ;
          <http://spinrdf.org/sp#arg46>
                  "Haiti" ;
          <http://spinrdf.org/sp#arg47>
                  "Honduras" ;
          <http://spinrdf.org/sp#arg48>
                  "India" ;
          <http://spinrdf.org/sp#arg49>
                  "Indonesia" ;
          <http://spinrdf.org/sp#arg5>
                  "Antigua and Barbuda" ;
          <http://spinrdf.org/sp#arg50>
                  "Ivory Coast" ;
          <http://spinrdf.org/sp#arg51>
                  "Jamaica" ;
          <http://spinrdf.org/sp#arg52>
                  "Kenya" ;
          <http://spinrdf.org/sp#arg53>
                  "Kiribati" ;
          <http://spinrdf.org/sp#arg54>
                  "Laos" ;
          <http://spinrdf.org/sp#arg55>
                  "Malaysia" ;
          <http://spinrdf.org/sp#arg56>
                  "Maldives" ;
          <http://spinrdf.org/sp#arg57>
                  "Marshall Islands" ;
          <http://spinrdf.org/sp#arg58>
                  "Martinique" ;
          <http://spinrdf.org/sp#arg59>
                  "Mexico" ;
          <http://spinrdf.org/sp#arg6>
                  "Argentina" ;
          <http://spinrdf.org/sp#arg60>
                  "Montserrat" ;
          <http://spinrdf.org/sp#arg61>
                  "New Caledonia" ;
          <http://spinrdf.org/sp#arg62>
                  "Nicaragua" ;
          <http://spinrdf.org/sp#arg63>
                  "Nigeria" ;
          <http://spinrdf.org/sp#arg64>
                  "Palau" ;
          <http://spinrdf.org/sp#arg65>
                  "Panama" ;
          <http://spinrdf.org/sp#arg66>
                  "Papua New Guinea" ;
          <http://spinrdf.org/sp#arg67>
                  "Paraguay" ;
          <http://spinrdf.org/sp#arg68>
                  "Peru" ;
          <http://spinrdf.org/sp#arg69>
                  "Philippines" ;
          <http://spinrdf.org/sp#arg7>
                  "Aruba" ;
          <http://spinrdf.org/sp#arg70>
                  "Puerto Rico" ;
          <http://spinrdf.org/sp#arg71>
                  "Saba" ;
          <http://spinrdf.org/sp#arg72>
                  "Saint Barthelemy" ;
          <http://spinrdf.org/sp#arg73>
                  "Saint Kitts and Nevis" ;
          <http://spinrdf.org/sp#arg74>
                  "Saint Lucia" ;
          <http://spinrdf.org/sp#arg75>
                  "Saint Martin" ;
          <http://spinrdf.org/sp#arg76>
                  "Saint Vincent and the Grenadines" ;
          <http://spinrdf.org/sp#arg77>
                  "Samoa" ;
          <http://spinrdf.org/sp#arg78>
                  "Senegal" ;
          <http://spinrdf.org/sp#arg79>
                  "Singapore" ;
          <http://spinrdf.org/sp#arg8>
                  "Bahamas" ;
          <http://spinrdf.org/sp#arg80>
                  "Sint Eustatius" ;
          <http://spinrdf.org/sp#arg81>
                  "Sint Maarten" ;
          <http://spinrdf.org/sp#arg82>
                  "Solomon Islands" ;
          <http://spinrdf.org/sp#arg83>
                  "Suriname" ;
          <http://spinrdf.org/sp#arg84>
                  "Thailand" ;
          <http://spinrdf.org/sp#arg85>
                  "Tonga" ;
          <http://spinrdf.org/sp#arg86>
                  "Trinidad and Tobago" ;
          <http://spinrdf.org/sp#arg87>
                  "Turks and Caicos" ;
          <http://spinrdf.org/sp#arg88>
                  "Uganda" ;
          <http://spinrdf.org/sp#arg89>
                  "United States (Continental US)" ;
          <http://spinrdf.org/sp#arg9>
                  "Bangladesh" ;
          <http://spinrdf.org/sp#arg90>
                  "United States Virgin Islands" ;
          <http://spinrdf.org/sp#arg91>
                  "Vanuatu" ;
          <http://spinrdf.org/sp#arg92>
                  "Venezuela" ;
          <http://spinrdf.org/sp#arg93>
                  "Vietnam"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#recentSexualEncounterWithZikaResidentOrTraveler> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasObservation> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#Union> ;
                            <http://spinrdf.org/sp#elements>
        (([ <http://spinrdf.org/sp#object>
                      "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
              <http://spinrdf.org/sp#predicate>
                      <http://example.org/zika#recentTravelToZikaArea> ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "p2"
                      ]
            ]) ([ <http://spinrdf.org/sp#object>
                      "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
              <http://spinrdf.org/sp#predicate>
                      <http://example.org/zika#residentOfZikaArea> ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "p2"
                      ]
            ]))
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        225517006 ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/code> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#hasCodeValue>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "p2"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/value> ;
          <http://spinrdf.org/sp#path2>
                  <http://example.org/utils#refersTo>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#timeSinceObsEnd> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ a       <http://spinrdf.org/sp#Filter> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#lt> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "timeSince"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  2678400000
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#possibleZikaExposure> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#Union> ;
                            <http://spinrdf.org/sp#elements>
        (([ <http://spinrdf.org/sp#object>
                      "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
              <http://spinrdf.org/sp#predicate>
                      <http://example.org/zika#recentTravelToZikaArea> ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "p"
                      ]
            ]) ([ <http://spinrdf.org/sp#object>
                      "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;
              <http://spinrdf.org/sp#predicate>
                      <http://example.org/zika#recentSexualEncounterWithZikaResidentOrTraveler> ;
              <http://spinrdf.org/sp#subject>
                      [ <http://spinrdf.org/sp#varName>
    "p"
                      ]
            ]))
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "avgTimeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/zika#avgTimeSinceZikaSymptomsOnset> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#SubQuery> ;
                            <http://spinrdf.org/sp#query>
        [ a       <http://spinrdf.org/sp#Select> ;
          <http://spinrdf.org/sp#groupBy>
                  ([ <http://spinrdf.org/sp#varName>
  "p"
                    ]) ;
          <http://spinrdf.org/sp#resultVariables>
                  ([ <http://spinrdf.org/sp#expression>
  [ a       <http://spinrdf.org/sp#Avg> ;
    <http://spinrdf.org/sp#expression>
            [ <http://spinrdf.org/sp#varName>
                      "timeSince"
            ]
  ] ;
                      <http://spinrdf.org/sp#varName>
  "avgTimeSince"
                    ] [ <http://spinrdf.org/sp#varName>
  "p"
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
  <http://example.org/zika#hasZikaSymptom> ;
                      <http://spinrdf.org/sp#subject>
  [ <http://spinrdf.org/sp#varName>
            "p"
  ]
                    ] [ <http://spinrdf.org/sp#object>
  [ <http://spinrdf.org/sp#varName>
            "timeSince"
  ] ;
                      <http://spinrdf.org/sp#predicate>
  <http://example.org/utils#timeSinceCondOnset> ;
                      <http://spinrdf.org/sp#subject>
  [ <http://spinrdf.org/sp#varName>
            "c"
  ]
                    ])
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasCondition> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#has> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        <http://hl7.org/fhir/Condition> ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasObservation> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#has> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        <http://hl7.org/fhir/Observation> ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#has> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "id"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/id> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "id"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  [ a       <http://spinrdf.org/sp#SeqPath> ;
                    <http://spinrdf.org/sp#path1>
                            <http://hl7.org/fhir/subject> ;
                    <http://spinrdf.org/sp#path2>
                            <http://hl7.org/fhir/reference>
                  ] ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#hasCodeValue> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  [ a       <http://spinrdf.org/sp#SeqPath> ;
                    <http://spinrdf.org/sp#path1>
                            [ a       <http://spinrdf.org/sp#SeqPath> ;
  <http://spinrdf.org/sp#path1>
          [ a       <http://spinrdf.org/sp#SeqPath> ;
            <http://spinrdf.org/sp#path1>
                    <http://hl7.org/fhir/coding> ;
            <http://spinrdf.org/sp#path2>
                    [ a       <http://spinrdf.org/sp#ModPath> ;
                      <http://spinrdf.org/sp#modMax>
                              -2 ;
                      <http://spinrdf.org/sp#modMin>
                              0 ;
                      <http://spinrdf.org/sp#subPath>
                              <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest>
                    ]
          ] ;
  <http://spinrdf.org/sp#path2>
          <http://www.w3.org/1999/02/22-rdf-syntax-ns#first>
                            ] ;
                    <http://spinrdf.org/sp#path2>
                            <http://hl7.org/fhir/code>
                  ] ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#refersTo> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "id"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/id> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "p"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "id"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/reference> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "r"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#timeSinceObsEnd> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "period"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://hl7.org/fhir/effective> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "o"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "start"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/start> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "period"
        ]
                          ] [ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "end"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/end> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "period"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "now"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> ;
                            <http://spinrdf.org/sp#subject>
        <http://example.org/utils#now>
                          ] [ a       <http://spinrdf.org/sp#Bind> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#sub> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "now"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  [ <http://spinrdf.org/sp#varName>
                            "end"
                  ]
        ] ;
                            <http://spinrdf.org/sp#variable>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ]
                          ])
              ] .


<http://example.org/Class>
      <http://spinrdf.org/spin#rule>
              [ a       <http://spinrdf.org/sp#Construct> ;
                <http://spinrdf.org/sp#templates>
                        ([ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://example.org/utils#timeSinceCondOnset> ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ]) ;
                <http://spinrdf.org/sp#where>
                        ([ a       <http://spinrdf.org/sp#TriplePath> ;
                            <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "onset"
        ] ;
                            <http://spinrdf.org/sp#path>
        [ a       <http://spinrdf.org/sp#SeqPath> ;
          <http://spinrdf.org/sp#path1>
                  <http://hl7.org/fhir/onset> ;
          <http://spinrdf.org/sp#path2>
                  <http://hl7.org/fhir/v>
        ] ;
                            <http://spinrdf.org/sp#subject>
        [ <http://spinrdf.org/sp#varName>
                  "c"
        ]
                          ] [ <http://spinrdf.org/sp#object>
        [ <http://spinrdf.org/sp#varName>
                  "now"
        ] ;
                            <http://spinrdf.org/sp#predicate>
        <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> ;
                            <http://spinrdf.org/sp#subject>
        <http://example.org/utils#now>
                          ] [ a       <http://spinrdf.org/sp#Bind> ;
                            <http://spinrdf.org/sp#expression>
        [ a       <http://spinrdf.org/sp#sub> ;
          <http://spinrdf.org/sp#arg1>
                  [ <http://spinrdf.org/sp#varName>
                            "now"
                  ] ;
          <http://spinrdf.org/sp#arg2>
                  [ <http://spinrdf.org/sp#varName>
                            "onset"
                  ]
        ] ;
                            <http://spinrdf.org/sp#variable>
        [ <http://spinrdf.org/sp#varName>
                  "timeSince"
        ]
                          ])
              ] .



