.. toggle-header::
    :header:  Property ``dcat:identifier`` of ``dcat:Distribution`` in RDF

    .. code-block:: Turtle
        :caption: A ``dcat:Catalog`` with a URI in RDF
        :emphasize-lines: 6

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://swisstopo/123567>
          a dcat:Distribution ;
          dct:identifier "ch.bafu.laerm-bahnlaerm_nacht" .