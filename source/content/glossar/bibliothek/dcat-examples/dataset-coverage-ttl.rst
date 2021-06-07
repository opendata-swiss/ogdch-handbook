.. code-block:: Turtle
    :caption: Coverage can be a date or a location: it does not have to be an isodate, but can be any date format
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
        dct:coverage "2021-04-26" .
