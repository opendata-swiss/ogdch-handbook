.. code-block:: xml
    :caption: Publisher of a dataset in RDF
    :emphasize-lines: 8,9,10,11,12

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/"
             xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:publisher>
          <rdf:Description>
            <rdf:type rdf:resource="http://www.w3.org/1999/02/22-rdf-syntax-ns#Description"/>
            <rdfs:label:>Bundesamt für Landestopografie swisstopo</rdfs:label:>
          </rdf:Description>
        </dct:publisher>

      </dcat:Dataset>

    </rdf:RDF>
