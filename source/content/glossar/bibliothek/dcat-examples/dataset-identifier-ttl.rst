.. toggle-header::
    :header: Property ``dcat:identifier`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: The ``dct:identfier`` is made up of the organization slug and an id to uniquely idenify the dataset on opendata.swiss
        :emphasize-lines: 6

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://swisstopo/123>
          a dcat:Dataset ;
          dct:identifier "123@amt-fur-landestopographie-swisstopo" .
