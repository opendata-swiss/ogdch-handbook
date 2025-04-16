.. code-block:: Turtle
    :caption: Keywords are given as localized strings
    :emphasize-lines: 5,6,7,8

    @prefix dcat: <http://www.w3.org/ns/dcat#> .

    <https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv>
      a dcat:Dataset ;
      dcat:keyword "Hunde"@de,
                  "Chien"@fr,
                  "Dogs"@en,
                  "Cani"@it.
