.. code-block:: Turtle
    :caption: Publisher of a dataset in Turtle
    :emphasize-lines: 7,9

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:publisher [
         a rdf:Description ;
         rdfs:label: "Bundesamt für Landestopografie swisstopo"
      ] .
