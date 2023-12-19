.. code-block:: xml
    :caption: A ``dcat:Dataset`` with a ``dcat:qualifiedRelation`` in RDF
    :emphasize-lines:  7,8,9,10,11

    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	      xmlns:dcat="http://www.w3.org/ns/dcat#"
	      xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://example-dataset-stadt-zurich">
         <dcat:qualifiedRelation>
            <dcat:Relationship>
               <dct:relation rdf:resource="https://opendata.swiss/perma/adb280a9-381d-4fb3-ae43-b40ace826dc7@stadt-zurich"/>
            </dcat:Relationship>
         </dcat:qualifiedRelation>
      </dcat:Dataset>
    </rdf:RDF>
