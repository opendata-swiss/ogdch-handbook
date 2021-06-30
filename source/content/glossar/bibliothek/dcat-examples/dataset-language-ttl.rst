.. code-block:: Turtle
    :caption: A ``dcat:Dataset`` with multiple ``dct:language`` properties
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dct:language "de", "fr".
