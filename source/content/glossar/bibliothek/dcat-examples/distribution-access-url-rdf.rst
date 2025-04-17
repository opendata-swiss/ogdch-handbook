.. code-block:: xml
    :caption: The access url is mandatory
    :emphasize-lines: 6

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Distribution rdf:about="https://swisstopo/123">
        <dcat:accessURL rdf:resource="https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=de"/>
      </dcat:Distribution>

    </rdf:RDF>
