.. code-block:: Turtle
    :caption: ``dct:relation`` values should be of the class ``rdfs:Resource`` or a subclass.
              They should therefore each have a URI, according to DCAT

    :emphasize-lines: 7,9

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:relation <http://www.bafu.admin.ch/laerm/index.html>, <http://www.bafu.admin.ch/legal_info.html>, <http://www.bafu.admin.ch/laerm/index.html?lang=de> .

    <http://www.bafu.admin.ch/laerm/index.html?lang=de> rdfs:label "Webseite des BAFU" .
