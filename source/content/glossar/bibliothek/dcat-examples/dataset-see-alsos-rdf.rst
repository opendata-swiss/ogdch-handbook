

    .. code-block:: xml
        :caption: The landing page should be a class and therefore come with a URI according to DCAT
        :emphasize-lines: 8

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dct="http://purl.org/dc/terms/"
                 xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

          <dcat:Dataset rdf:about="https://swisstopo/123">
             <rdfs:seeAlso>326@swisstopo</rdfs:seeAlso>
          </dcat:Dataset>

        </rdf:RDF>
