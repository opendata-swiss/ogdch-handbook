.. code-block:: Turtle
    :caption: A ``dcat:Catalog`` containing two datasets in Turtle
    :emphasize-lines: 5

    @prefix dcat: <http://www.w3.org/ns/dcat#> .

    <https://swisstopo/catalog-endpoint.rdf>
      a dcat:Catalog ;
      dcat:dataset <https://swisstopo/123>, <https://swisstopo/345> .
