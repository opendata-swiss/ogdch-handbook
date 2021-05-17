.. toggle-header::
    :header: Property ``dcat:accessURL`` of ``dcat:Distribution`` in RDF

    .. code-block:: xml
        :caption: The access url is mandatory
        :emphasize-lines: 6

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#">

          <dcat:Distribution rdf:about="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg">
            <dcat:accessURL rdf:resource="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg"/>
          </dcat:Distribution>

        </rdf:RDF>
