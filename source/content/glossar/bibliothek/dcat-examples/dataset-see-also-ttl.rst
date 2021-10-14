.. code-block:: Turtle
    :caption: A ``dcat:Dataset`` with a ``rdfs:seeAlso`` in Turtle
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      rdfs:seeAlso "326@swisstopo" .
