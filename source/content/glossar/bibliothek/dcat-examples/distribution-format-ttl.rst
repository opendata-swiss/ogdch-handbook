.. code-block:: Turtle
    :caption: The format is used for distributions that have no download url
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://data.tg.ch/api/v2/catalog/datasets/sk-stat-47/exports/csv>
       a dcat:Distribution ;
       dct:format  <http://publications.europa.eu/resource/authority/file-type/CSV> .
