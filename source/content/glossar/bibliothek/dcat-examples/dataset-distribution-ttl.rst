.. code-block:: Turtle
    :caption: ``dcat:Distribution`` with URIs in Turtle
    :emphasize-lines: 5,6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dcat:distribution <https://swisstopo/resource/456>,
                        <https://swisstopo/resource/345> .
