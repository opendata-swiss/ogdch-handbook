.. code-block:: Turtle
    :caption: Here you can see how every class in the catalog has a URI
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:language "de", "fr".
