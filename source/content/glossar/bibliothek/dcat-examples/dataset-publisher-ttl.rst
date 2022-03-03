.. code-block:: Turtle
    :caption: :fa:`exclamation` publisher as foaf:Organization which is a subtype of foaf:Agent
    :emphasize-lines: 7,9

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:publisher <https://swisstopo> .

    <https://swisstopo>
      a foaf:Organization ;
      foaf:name: "Landesamt für Topographie Swisstopo"@de ,
                 "Federal Office of Topography"@en .