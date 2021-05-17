.. toggle-header::
    :header: Property ``dct:issued`` of ``dcat:Distribution`` in RDF

    .. code-block:: xml
        :caption: The issued date is expected in ISO Format
        :emphasize-lines: 7

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dc="http://purl.org/dc/terms/">

          <dcat:Distribution rdf:about="https://swisstopo/123">
            <dc:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2013-04-26T01:00:00Z</dc:issued>
          </dcat:Distribution>

        </rdf:RDF>
