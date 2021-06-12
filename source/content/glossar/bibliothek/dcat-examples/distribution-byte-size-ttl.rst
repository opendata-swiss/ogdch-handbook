.. code-block:: Turtle
    :caption: The size in bytes of a distribution is given as a decimal
    :emphasize-lines: 5

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <https://swisstopo/123>
      a dcat:Distribution ;
        dcat:byteSize "698039"^^xsd:decimal .
