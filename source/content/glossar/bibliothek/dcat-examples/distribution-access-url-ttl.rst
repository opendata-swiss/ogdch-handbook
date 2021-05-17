.. toggle-header::
    :header: Property ``dcat:accessURL`` of ``dcat:Distribution`` in Turtle

    .. code-block:: Turtle
        :caption: The access url is mandatory
        :emphasize-lines: 7

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

        <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg>
           a dcat:Distribution ;
           dcat:accessURL <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg> .