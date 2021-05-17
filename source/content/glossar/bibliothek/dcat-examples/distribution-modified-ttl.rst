.. toggle-header::
    :header: Property ``dct:modified`` of ``dcat:Distribution`` in Turtle

    .. code-block:: Turtle
        :caption: The modified date is expected in ISO Format
        :emphasize-lines: 7

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

        <https://swisstopo/123>
          a dcat:Distribution ;
            dct:modified "2013-04-26T01:00:00Z"^^xsd:dateTime .
