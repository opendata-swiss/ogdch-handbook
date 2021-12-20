.. code-block:: xml
    :caption: A time period in RDF: there can be multiple of these
    :emphasize-lines: 8,9,10,11,12,13

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/"
             xmlns:schema="http://schema.org/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:temporal>
          <dct:PeriodOfTime>
            <schema:startDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">1905-03-01</schema:startDate>
            <schema:endDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2013-01-05</schema:endDate>
          </dct:PeriodOfTime>
        </dct:temporal>
      </dcat:Dataset>
    </rdf:RDF>
