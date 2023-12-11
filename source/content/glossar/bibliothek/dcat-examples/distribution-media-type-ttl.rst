.. code-block:: Turtle
    :caption: The mediaType is used to specify the file format of a download url
    :emphasize-lines: 8

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Distribution ;
          dcat:downloadURL <http:swisstopo/file/1234/ld+json> ;
          dcat:mediaType <https://www.iana.org/assignments/media-types/application/ld+json> .
