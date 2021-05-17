.. toggle-header::
    :header: Property ``dct:relation`` of ``dcat:Dataset`` in RDF

    .. code-block:: xml
        :caption: Further information links should be a class and therefore come with a URI according to DCAT
        :emphasize-lines: 8,9,10,11,12,13,14

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dct="http://purl.org/dc/terms/"
                 xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

          <dcat:Dataset rdf:about="https://swisstopo/123">
            <dct:relation rdf:resource="http://www.bafu.admin.ch/laerm/index.html"/>
            <dct:relation rdf:resource="http://www.bafu.admin.ch/legal_info.html"/>
            <dct:relation>
              <rdf:Description rdf:about="http://www.bafu.admin.ch/laerm/index.html?lang=de">
                <rdfs:label>Webseite des BAFU</rdfs:label>
              </rdf:Description>
            </dct:relation>

          </dcat:Dataset>

        </rdf:RDF>
