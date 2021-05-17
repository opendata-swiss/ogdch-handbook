.. toggle-header::
    :header: Property ``dcat:dataset`` of ``dcat:Catalog`` in Turtle

    .. code-block:: Turtle
        :caption: A ``dcat:Catalog`` with a URI in Turtle
        :emphasize-lines: 5

        @prefix dcat: <http://www.w3.org/ns/dcat#> .

        <https://swisstopo/catalog-endpoint.rdf>
          a dcat:Catalog ;
          dcat:dataset <https://swisstopo/123>, <https://swisstopo/345> .
