.. code-block:: Turtle
    :caption: A ``dcat:Dataset`` with multiple ``dct:language`` properties
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

    <https://swisstopo/123> a dcat:Dataset ;
      dct:language <http://publications.europa.eu/resource/authority/language/DEU>, <http://publications.europa.eu/resource/authority/language/FRA> .
