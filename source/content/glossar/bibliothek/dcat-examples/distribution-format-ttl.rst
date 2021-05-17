.. toggle-header::
    :header: Property ``dct:format`` of ``dcat:Distribution`` in Turtle

    .. code-block:: Turtle
        :caption: The format is used for distributions that have no download url
        :emphasize-lines: 8

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

        <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg>
           a dcat:Distribution ;
           dcat:accessURL <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg> ;
           dct:format  <https://www.iana.org/assignments/media-types/img/jpeg> .
