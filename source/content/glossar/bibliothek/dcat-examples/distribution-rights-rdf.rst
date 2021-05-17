.. toggle-header::
    :header: Property ``dct:rights`` of ``dcat:Distribution`` in RDF

    .. code-block:: xml
        :caption: the rights statement comes from a controlled vocabulary
        :emphasize-lines: 8

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dct="http://purl.org/dc/terms/">

          <dcat:Distribution rdf:about="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg">
            <dcat:accessURL rdf:resource="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg"/>
            <dct:rights>NonCommercialAllowed-CommercialAllowed-ReferenceRequired</dct:rights>
          </dcat:Distribution>

        </rdf:RDF>