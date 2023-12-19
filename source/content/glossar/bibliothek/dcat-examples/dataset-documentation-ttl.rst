.. code-block:: Turtle
    :emphasize-lines: 6,7,8,9,10

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    
    <https://bag/covid-19> a dcat:Dataset ;
	      foaf:Document [
		        rdf:about "https://www.covid19.admin.ch/api/data/documentation" ;
	      ], [
		        rdf:about "https://de.wikipedia.org/wiki/Datenmanagement" ;
	      ] .


