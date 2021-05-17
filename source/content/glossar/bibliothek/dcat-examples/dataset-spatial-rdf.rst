.. toggle-header::
    :header: Property ``dct:spatial`` of ``dcat:Dataset`` in RDF

    .. code-block:: xml
        :caption: Property spacial
        :emphasize-lines: 7,8

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
                 xmlns:dct="http://purl.org/dc/terms/">
          <dcat:Dataset rdf:about="https://swisstopo/123">
                <dct:spatial rdf:resource="http://publications.europa.eu/mdr/authority/country/ZWE"/>
                <dct:spatial>Bern</dct:spatial>

          </dcat:Dataset>

        </rdf:RDF>


