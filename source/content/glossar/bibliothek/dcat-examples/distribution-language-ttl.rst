.. toggle-header::
    :header: Property ``dct:language`` of ``dcat:Distribution``  in Turtle

    .. code-block:: Turtle
        :caption: The language of a Distribution
        :emphasize-lines: 6

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://swisstopo/123>
          a dcat:Distribution ;
          dct:language "fr".
