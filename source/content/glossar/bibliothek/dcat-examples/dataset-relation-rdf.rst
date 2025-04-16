.. code-block:: xml
    :caption: ``dct:relation`` values should be of the class ``rdfs:Resource`` or a subclass.
              They should therefore each have a URI, according to DCAT
    :emphasize-lines: 8,9,10,11,12,13,14,15

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/"
             xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

      <dcat:Dataset rdf:about="https://ckan.opendata.swiss/dataset/6a2f7d16-074b-47c8-ad4c-b14c8814ae64">
        <dct:relation>
          <rdf:Description rdf:about="https://map.georessourcen.ethz.ch/">
            <rdfs:label xml:lang="de">Rohstoffinformationssystem</rdfs:label>
            <rdfs:label xml:lang="en">Resources Information System</rdfs:label>
            <rdfs:label xml:lang="fr">Système d'informations des matières premières</rdfs:label>
            <rdfs:label xml:lang="it">Sistema d'informazione sulle materie prime</rdfs:label>
          </rdf:Description>
        </dct:relation>

      </dcat:Dataset>

    </rdf:RDF>
