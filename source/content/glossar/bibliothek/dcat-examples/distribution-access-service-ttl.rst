.. code-block:: Turtle
    :emphasize-lines: 3,4,5

    @prefix dcat: <http://www.w3.org/ns/dcat#> .

    <https://swisstopo/opendata/123>
      a dcat:Distribution ;
      dcat:accessService <https://swisstopo/data/123> .

    <https://swisstopo/data/123>
      a dcat:DataService .