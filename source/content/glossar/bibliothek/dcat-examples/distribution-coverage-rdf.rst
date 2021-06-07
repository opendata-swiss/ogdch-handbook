.. code-block:: xml
    :caption: Coverage can be a date or a location: it does not have to be an isodate, but can be any date format
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="https://swisstopo/distribution/1235">
        <dct:coverage>2021-04-26</dc:coverage>
      </dcat:Distribution>

    </rdf:RDF>
