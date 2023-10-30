.. code-block:: xml
    :emphasize-lines: 12,13
    :emphasize-lines: 12,13

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
             xmlns:foaf="http://xmlns.com/foaf/0.1/">

      <dcat:Dataset rdf:about="https://bag/covid-19">
        <foaf:Document rdf:about="https://www.covid19.admin.ch/api/data/documentation"/>
        <foaf:Document rdf:about="https://de.wikipedia.org/wiki/Datenmanagement"/>    
      </dcat:Dataset>

    </rdf:RDF>
