.. toggle-header::
    :header: CURRENT Property ``dcat:landingPage`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: The landing Page in the current implementation is a string
        :emphasize-lines: 5

        @prefix dcat: <http://www.w3.org/ns/dcat#> .

        <https://swisstopo/123>
          a dcat:Dataset ;
            dcat:landingPage "http://www.bafu.admin.ch/laerm/index.html?lang=de" .
