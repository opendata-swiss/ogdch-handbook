.. code-block:: xml
    :caption: A ``dcat:Catalog`` containing two datasets in RDF
    :emphasize-lines: 6,7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Catalog rdf:about="https://swisstopo/catalog-endpoint.rdf">
        <dcat:dataset rdf:resource="https://swisstopo/123"/>
        <dcat:dataset rdf:resource="https://swisstopo/345"/>
      </dcat:Catalog>

    </rdf:RDF>
