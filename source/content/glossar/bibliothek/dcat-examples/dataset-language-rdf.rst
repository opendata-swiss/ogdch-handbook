.. code-block:: xml
    :caption: A ``dcat:Dataset`` with multiple ``dct:language`` properties
    :emphasize-lines: 7,8

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:language rdf:resource="http://publications.europa.eu/resource/authority/language/DEU"/>
        <dct:language rdf:resource="http://publications.europa.eu/resource/authority/language/FRA"/>
      </dcat:Dataset>

    </rdf:RDF>
