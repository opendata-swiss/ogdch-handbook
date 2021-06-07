.. code-block:: xml
    :caption: Here you can see how every class in the catalog has a URI
    :emphasize-lines: 7,8

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:language>de</dct:language>
        <dct:language>fr</dct:language>
      </dcat:Dataset>

    </rdf:RDF>
