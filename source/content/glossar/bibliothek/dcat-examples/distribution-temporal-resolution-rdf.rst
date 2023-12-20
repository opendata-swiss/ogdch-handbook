.. code-block:: xml
   :emphasize-lines: 8

   <?xml version="1.0" encoding="utf-8"?>
   <rdf:RDF
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:dcat="http://www.w3.org/ns/dcat#"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema#">

      <dcat:Distribution rdf:about="https://swisstopo/opendata/123">
         <dcat:temporalResolution rdf:datatype="http://www.w3.org/2001/XMLSchema#duration">P1D</dcat:temporalResolution>
      </dcat:Distribution>
   </rdf:RDF>