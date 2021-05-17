.. toggle-header::
    :header:  Property ``dcat:identifier`` of ``dcat:Distribution`` in RDF

    .. code-block:: xml
        :caption: A ``dcat:Catalog`` with a URI in RDF
        :emphasize-lines: 7

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:dcat="http://www.w3.org/ns/dcat#"
               xmlns:dc="http://purl.org/dc/terms/">

          <dcat:Distribution rdf:about="https://swisstopo/123567">
            <dc:identifier>ch.bafu.laerm-bahnlaerm_nacht</dc:identifier>
          </dcat:Distribution>

        </rdf:RDF>

    .. code-block:: xml
      :caption: dct:identifier

      <dct:identifier>ch.bafu.laerm-bahnlaerm_nacht</dct:identifier>