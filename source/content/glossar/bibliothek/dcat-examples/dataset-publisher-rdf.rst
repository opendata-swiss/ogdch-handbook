.. code-block:: xml
    :caption: :fa:`exclamation` publisher as foaf:Agent
    :emphasize-lines: 9,10,11,12,13,14

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/"
             xmlns:foaf="http://xmlns.com/foaf/0.1/">

      <dcat:Dataset> rdf:about="https://swisstopo/123">
        <dct:publisher>
          <foaf:Agent rdf:about="https://swisstopo.ch">
            <foaf:name xml:lang="de">Bundesamt für Landestopografie swisstopo</foaf:name>
            <foaf:name xml:lang="fr">Office fédéral de topographie swisstopo</foaf:name>
            <foaf:name xml:lang="it">Ufficio federale di topografia swisstopo</foaf:name>
            <foaf:name xml:lang="en">Federal Office of Topography swisstopo</foaf:name>
          </foaf:Agent>
        </dct:publisher>

      </dcat:Dataset>

    </rdf:RDF>
