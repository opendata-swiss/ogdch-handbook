.. code-block:: Turtle
    :caption: The download url can be used for files and will then be the same as the access url
    :emphasize-lines: 7

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <https://swisstopo/123>
      a dcat:Distribution ;
          dcat:downloadURL <http:swisstopo/file/1234/ld+json> ;
          dcat:accessURL <http:swisstopo/file/1234/ld+json> ;
          dcat:mediaType: <https://www.iana.org/assignments/media-types/application/ld+json> .
