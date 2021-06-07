.. code-block:: Turtle
    :caption: Coverage can be a date or a location: it does not have to be an isodate, but can be any date format
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/distribution/1235>
      a dcat:Distribution ;
        dct:coverage "2021-04-26" .
