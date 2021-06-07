.. code-block:: xml
    :caption: A time period in RDF: there can be multiple of those
    :emphasize-lines: 2,3

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/"
             xmlns:schema="http://schema.org/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dc:temporal>
          <dc:PeriodOfTime>
            <schema:startDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">1905-03-01</schema:startDate>
            <schema:endDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2013-01-05</schema:endDate>
          </dc:PeriodOfTime>
        </dc:temporal>

      </dcat:Dataset>

    </rdf:RDF>
