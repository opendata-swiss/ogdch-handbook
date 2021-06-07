

    .. code-block:: Turtle
        :caption: Publisher of a Dataset current implementation in Turtle: does not conform to DCAT-AP-CH
        :emphasize-lines: 7,9

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          dct:publisher <https://www.bafu.admin.ch/> .

        <https://www.bafu.admin.ch/> rdfs:label "Bundesamt für Landestopografie swisstopo" .
