.. toggle-header::
    :header: Property ``dcat:theme`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: The categories are selected form a swiss controlled vocabulary
        :emphasize-lines: 6,7

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          dcat:theme <http://opendata.swiss/themes/population>,
                     <http://opendata.swiss/themes/territory> ;