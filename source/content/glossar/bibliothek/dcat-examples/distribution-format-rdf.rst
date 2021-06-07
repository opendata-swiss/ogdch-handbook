.. code-block:: xml
    :caption: The format is used for distributions that have no download url
    :emphasize-lines: 8

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg">
        <dcat:accessURL rdf:resource="http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg"/>
        <dc:format rdf:resource="https://www.iana.org/assignments/media-types/img/jpeg"/>
      </dcat:Distribution>

    </rdf:RDF>
