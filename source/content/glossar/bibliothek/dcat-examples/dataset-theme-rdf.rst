.. code-block:: xml
    :caption: The categories are selected form a swiss controlled vocabulary
    :emphasize-lines: 6,7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dcat:theme rdf:resource="http://opendata.swiss/themes/population"/>
        <dcat:theme rdf:resource="http://opendata.swiss/themes/territory"/>
      </dcat:Dataset>

    </rdf:RDF>