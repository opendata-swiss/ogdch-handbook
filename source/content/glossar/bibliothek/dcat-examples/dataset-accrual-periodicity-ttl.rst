.. code-block:: Turtle
    :caption: dataset that is updated on a daily basis
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
              a dcat:Dataset ;
              dct:accrualPeriodicity <http://purl.org/cld/freq/daily>  .
