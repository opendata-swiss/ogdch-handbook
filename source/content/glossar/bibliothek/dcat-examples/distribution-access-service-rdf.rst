.. code-block:: xml
   :emphasize-lines: 8

   <?xml version="1.0" encoding="utf-8"?>
   <rdf:RDF
	   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	   xmlns:dcat="http://www.w3.org/ns/dcat#">

	   <rdf:Description rdf:about="https://swisstopo/opendata/123">
		   <rdf:type rdf:resource="http://www.w3.org/ns/dcat#Distribution"/>
		   <dcat:accessService rdf:resource="https://swisstopo/data/123"/>
	   </rdf:Description>

	   <rdf:Description rdf:about="https://swisstopo/data/123">
		   <rdf:type rdf:resource="http://www.w3.org/ns/dcat#DataService"/>
	   </rdf:Description>
   </rdf:RDF>