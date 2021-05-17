.. toggle-header::
    :header: Property ``dct:accrualPeriodicty`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: daily updated dataset
        :emphasize-lines: 6

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://swisstopo/123>
                  a dcat:Dataset ;
                  dcterms:accrualPeriodicity <http://purl.org/cld/freq/daily>  .
