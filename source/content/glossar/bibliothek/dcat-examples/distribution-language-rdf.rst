.. code-block:: xml
    :caption: The language of a distribution
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="https://swisstopo/123">
        <dct:language rdf:resource="http://publications.europa.eu/resource/authority/language/FRA"/>
      </dcat:Distribution>

    </rdf:RDF>
