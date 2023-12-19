.. code-block:: Turtle
    :caption: The categories are selected from the EU theme vocabulary
    :emphasize-lines: 6,7

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dcat:theme <http://publications.europa.eu/resource/authority/data-theme/REGI>,
                 <http://publications.europa.eu/resource/authority/data-theme/ENVI> ;
