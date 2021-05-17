.. toggle-header::
    :header: Property ``dct:relation`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: Further information links should be a class and therefore come with a URI according to DCAT
        :emphasize-lines: 7,9

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dc: <http://purl.org/dc/terms/> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          dct:relation <http://www.bafu.admin.ch/laerm/index.html>, <http://www.bafu.admin.ch/legal_info.html>, <http://www.bafu.admin.ch/laerm/index.html?lang=de> .

        <http://www.bafu.admin.ch/laerm/index.html?lang=de> rdfs:label "Webseite des BAFU" .