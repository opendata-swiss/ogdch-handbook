.. code-block:: xml
    :caption: ``dcat:Distribution`` with URIs in RDF
    :emphasize-lines: 6,7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dcat:distribution rdf:resource="https://swisstopo/resource/456"/>
        <dcat:distribution rdf:resource="https://swisstopo/resource/345"/>
      </dcat:Dataset>

    </rdf:RDF>