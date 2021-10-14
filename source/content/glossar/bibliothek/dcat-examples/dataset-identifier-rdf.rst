.. code-block:: xml
    :caption: The ``dct:identifier`` is made up of the organization slug and an id to uniquely identify the dataset on opendata.swiss

    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:identifier>123@amt-fur-landestopographie-swisstopo</dct:identifier>
      </dcat:Dataset>

    </rdf:RDF>
