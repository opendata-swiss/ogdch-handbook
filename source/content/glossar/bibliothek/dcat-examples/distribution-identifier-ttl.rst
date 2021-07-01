.. code-block:: Turtle
    :caption: A ``dcat:Distribution`` with a ``dct:identifier`` in RDF
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123567>
      a dcat:Distribution ;
      dct:identifier "ch.bafu.laerm-bahnlaerm_nacht" .
