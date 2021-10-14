.. code-block:: Turtle
    :caption: A time period in Turtle: there can be multiple of these
    :emphasize-lines: 8,9,10,11,12

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix schema: <http://schema.org/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:temporal [
        a dct:PeriodOfTime ;
        schema:startDate "1905-03-01"^^xsd:date ;
        schema:endDate "2013-01-05"^^xsd:date
      ] .
