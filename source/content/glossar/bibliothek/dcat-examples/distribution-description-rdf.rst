.. code-block:: xml
    :caption: Description of a distribution in RDF
    :emphasize-lines: 7,8,9,10

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="https://swisstopo/123456">
        <dct:description xml:lang="en">Current Measurement Values (csv, GeoJSON)</dct:description>
        <dct:description xml:lang="de">Aktuelle Messwerte (csv, GeoJSON)</dct:description>
        <dct:description xml:lang="fr">Valeurs actuelles (csv, GeoJSON)</dct:description>
        <dct:description xml:lang="it">Valori attuali (csv, GeoJSON)</dct:description>
      </dcat:Distribution>

    </rdf:RDF>
