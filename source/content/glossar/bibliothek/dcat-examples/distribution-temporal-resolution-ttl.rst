.. code-block:: Turtle
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <https://swisstopo/opendata/123>
      a dcat:Distribution ;
      dcat:temporalResolution "P1D"^^xsd:duration .
