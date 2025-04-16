.. code-block:: Turtle
    :emphasize-lines: 6,8

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    
    <https://bag/covid-19> a dcat:Distribution ;
	    foaf:page <https://www.covid19.admin.ch/api/data/documentation#data-context-api> .

    <https://www.covid19.admin.ch/api/data/documentation#data-context-api> a foaf:Document .


