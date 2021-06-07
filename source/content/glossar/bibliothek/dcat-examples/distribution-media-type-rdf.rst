.. code-block:: xml
    :caption: The mediaType is used to specify the file format of a download url
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Distribution rdf:about="https://swisstopo/123">
        <dcat:downloadURL rdf:resource="http:swisstopo/file/1234/ld+json"/>
        <dcat:mediaType: rdf:resource="https://www.iana.org/assignments/media-types/application/ld+json"/>
      </dcat:Distribution>

    </rdf:RDF>
