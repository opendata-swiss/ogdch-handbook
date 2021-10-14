.. code-block:: xml
    :caption: The size in bytes of a distribution is given as a decimal
    :emphasize-lines: 6

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Distribution rdf:about="https://swisstopo/123">
        <dcat:byteSize rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">698039.0</dcat:byteSize>
      </dcat:Distribution>

    </rdf:RDF>
