.. code-block:: Turtle
    :caption: The language of a distribution
    :emphasize-lines: 6

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123> a dcat:Distribution ;
      dct:language <http://publications.europa.eu/resource/authority/language/FRA> .
