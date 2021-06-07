.. code-block:: Turtle
    :caption: In TUrtle strings are marked by the language they are in
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv>
      a dcat:Dataset ;
      dct:title "Hunde"@de, "Chien"@fr, "Dogs"@en, "Cani"@it.
