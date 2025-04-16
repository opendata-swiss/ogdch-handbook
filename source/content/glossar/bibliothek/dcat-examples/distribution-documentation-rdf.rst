.. code-block:: xml
    :emphasize-lines: 7,8,9

    <?xml version="1.0" encoding="utf-8" ?>
      <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:dcat="http://www.w3.org/ns/dcat#"
              xmlns:foaf="http://xmlns.com/foaf/0.1/">

      <dcat:Distribution rdf:about="https://bag/covid-19">
        <foaf:page>
          <foaf:Document rdf:about="https://www.covid19.admin.ch/api/data/documentation#data-context-api"/> 
        </foaf:page>   
      </dcat:Distribution>

      </rdf:RDF>
