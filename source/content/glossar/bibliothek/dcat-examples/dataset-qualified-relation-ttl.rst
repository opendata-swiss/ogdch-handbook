.. code-block:: Turtle
    :caption: A ``dcat:Dataset`` with a ``rdfs:seeAlso`` in Turtle
    :emphasize-lines:  6,7,8

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dcterms: <http://purl.org/dc/terms/> .

    <https://example-dataset-stadt-zurich> a dcat:Dataset ;
	    dcat:qualifiedRelation [
		     rdf:type dcat:Relationship ;
		     dcterms:relation <https://opendata.swiss/perma/adb280a9-381d-4fb3-ae43-b40ace826dc7@stadt-zurich> ;
	    ] .
