.. code-block:: Turtle
    :caption: The access url is mandatory
    :emphasize-lines: 5

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123> a dcat:Distribution ;
       dcat:accessURL <https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de> .
