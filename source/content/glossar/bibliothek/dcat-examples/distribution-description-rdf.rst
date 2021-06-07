.. code-block:: xml
    :caption: Description of a Distribution in RDF
    :emphasize-lines: 7,8

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="https://swisstopo/123456">
        <dc:description xml:lang="en">Railway noises at night</dc:description>
        <dc:description xml:lang="de">Eisenbahnlärm in der Nacht</dc:description>
      </dcat:Distribution>

    </rdf:RDF>
