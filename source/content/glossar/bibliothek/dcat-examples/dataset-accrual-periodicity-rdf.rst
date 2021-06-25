.. code-block:: xml
    :caption: dataset that is updated on a daily basis
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:accrualPeriodicity rdf:resource="http://purl.org/cld/freq/daily"/>
      </dcat:Dataset>

    </rdf:RDF>
