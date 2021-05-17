.. toggle-header::
    :header: Property ``dct:keyword`` of ``dcat:Dataset`` in Turtle

    .. code-block:: Turtle
        :caption: Keywords are given as localized strings
        :emphasize-lines: 6,7,8,9,10

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .

        <https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv>
          a dcat:Dataset ;
          dct:keyword "Hunde"@de,
                      "statistics"@de,
                      "Chien"@fr,
                      "Dogs"@en,
                      "Cani"@it.
