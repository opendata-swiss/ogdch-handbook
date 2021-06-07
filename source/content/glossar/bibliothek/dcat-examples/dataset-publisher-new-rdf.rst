

    .. code-block:: xml
        :caption: Publisher of a Dataset NEW implementation
        :emphasize-lines: 8,9,10,11,12

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dc="http://purl.org/dc/terms/"
                 xmlns:foaf="http://xmlns.com/foaf/0.1/">

          <dcat:Dataset rdf:about="https://swisstopo/123">
            <dct:publisher>
              <foaf:Organization rdf:about="https://www.bafu.admin.ch/">
                <foaf:name xml:lang="de">Bundesamt für Landestopografie swisstopo</foaf:name>
              </foaf:Organization>
            </dct:publisher>

          </dcat:Dataset>

        </rdf:RDF>
