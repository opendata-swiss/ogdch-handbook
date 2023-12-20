.. code-block:: Turtle
    :emphasize-lines: 5,6

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    
    <https://bag/covid-19> a dcat:Dataset ;
	      foaf:Document <https://www.covid19.admin.ch/api/data/documentation> ,
		        <https://de.wikipedia.org/wiki/Datenmanagement> .


