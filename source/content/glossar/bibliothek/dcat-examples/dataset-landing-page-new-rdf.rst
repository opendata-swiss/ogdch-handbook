.. toggle-header::
    :header: NEW Property ``dcat:landingPage`` of ``dcat:Dataset`` in RDF

    .. code-block:: xml
        :caption: The landing page should be a class and therefore come with a URI according to DCAT
        :emphasize-lines: 6

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#">

          <dcat:Dataset rdf:about="https://swisstopo/123">
            <dcat:landingPage rdf:resource="http://www.bafu.admin.ch/laerm/index.html?lang=de"/>
          </dcat:Dataset>

        </rdf:RDF>


