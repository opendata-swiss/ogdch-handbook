.. toggle-header::
    :header: Class ``dcat:Catalog`` in Turtle

    .. code-block:: Turtle
        :caption: A ``dcat:Catalog`` with a URI in Turtle
        :emphasize-lines: 3,4

        @prefix dcat: <http://www.w3.org/ns/dcat#> .

        <https://swisstopo/catalog-endpoint.rdf>
          a dcat:Catalog ;
          dcat:dataset <https://swisstopo/123>, <https://swisstopo/345> .
