.. code-block:: Turtle
    :caption: vcard:Kind is a class: choose between ``vcard:Organization`` and ``vcard:Individuel``
    :emphasize-lines: 7,8,9,11,12,13

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix vcard: <http://www.w3.org/2006/vcard/ns#> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dcat:contactPoint [
        a vcard:Organization ;
        vcard:fn "Abteilung Lärm BAFU" ;
        vcard:hasEmail <mailto:noise@bafu.admin.ch>
      ], [
        a vcard:Individual ;
        vcard:fn "Sekretariat BAFU" ;
        vcard:hasEmail <mailto:sekretariat@bafu.admin.ch>
      ] .
