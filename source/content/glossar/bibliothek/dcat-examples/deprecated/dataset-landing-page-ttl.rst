.. code-block:: Turtle
    :caption: The landing page is provided as a string
    :emphasize-lines: 5

    @prefix dcat: <http://www.w3.org/ns/dcat#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
        dcat:landingPage "http://www.bafu.admin.ch/laerm/index.html" .
