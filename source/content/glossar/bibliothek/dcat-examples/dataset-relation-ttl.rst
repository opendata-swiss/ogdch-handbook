.. code-block:: Turtle
    :caption: ``dct:relation`` values should be of the class ``rdfs:Resource`` or a subclass.
              They should therefore each have a URI, according to DCAT
    :emphasize-lines: 7,9

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

    <https://ckan.opendata.swiss/dataset/6a2f7d16-074b-47c8-ad4c-b14c8814ae64> a dcat:Dataset ;
      dct:relation <https://map.georessourcen.ethz.ch/> .

    <https://map.georessourcen.ethz.ch/> rdfs:label "Rohstoffinformationssystem"@de, "Resources Information System"@en, "Système d'informations des matières premières"@fr, "Sistema d'informazione sulle materie prime"@it .
