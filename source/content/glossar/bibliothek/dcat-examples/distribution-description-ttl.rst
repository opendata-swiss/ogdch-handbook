.. code-block:: Turtle
    :caption: Description of a distribution in Turtle
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123456>
      a dcat:Distribution ;
      dct:description "Current Measurement Values (csv, GeoJSON)"@en, "Aktuelle Messwerte (csv, GeoJSON)"@de, "Valeurs actuelles (csv, GeoJSON)"@fr, "Valori attuali (csv, GeoJSON) (csv, GeoJSON)"@it .
