.. code-block:: xml
    :caption: The download url can be used for files
    :emphasize-lines: 6

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Distribution rdf:about="https://swisstopo/123">
        <dcat:downloadURL rdf:resource="http:swisstopo/file/1234/ld+json"/>
        <dcat:accessURL rdf:resource="http:swisstopo/file/1234/ld+json"/>
        <dcat:mediaType: rdf:resource="https://www.iana.org/assignments/media-types/application/ld+json"/>
      </dcat:Distribution>
