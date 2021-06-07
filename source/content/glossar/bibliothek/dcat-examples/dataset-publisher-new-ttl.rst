

    .. code-block:: Turtle
        :caption: Publisher of a Dataset NEW implementation in Turtle: conforms to DCAT-AP-CH
        :emphasize-lines: 7,9,10

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix foaf: <http://xmlns.com/foaf/0.1/> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          dct:publisher <https://www.bafu.admin.ch/> .

        <https://www.bafu.admin.ch/> a foaf:Organization;
          foaf:name "Bundesamt für Landestopografie swisstopo"@de .
