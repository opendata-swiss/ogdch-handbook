.. code-block:: Turtle
    :caption: :fa:`exclamation` publisher as foaf:Agent
    :emphasize-lines: 8, 9, 10, 11, 12, 13

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:publisher <https://swisstopo.ch> .

    <https://swisstopo.ch> a foaf:Agent ;
      foaf:name "Bundesamt für Landestopografie swisstopo"@de, "Office fédéral de topographie swisstopo"@fr, "Ufficio federale di topografia swisstopo"@it, "Federal Office of Topography swisstopo"@en .
