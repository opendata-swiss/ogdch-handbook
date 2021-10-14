.. code-block:: xml
    :caption: The issued date is expected in ISO Format
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2013-04-26T01:00:00Z</dct:issued>
      </dcat:Dataset>

    </rdf:RDF>
