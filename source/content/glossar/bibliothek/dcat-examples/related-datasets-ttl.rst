.. toggle-header::
    :header: Property ``rdfs:seeAlso`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: related datasets should be classes and have their own URIs
        :emphasize-lines: 6

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          rdfs:seeAlso "326@swisstopo" .