.. code-block:: Turtle
    :caption: the license statement comes from a controlled vocabulary
    :emphasize-lines: 7,8,9,10

    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg>
       a dcat:Distribution ;
       dct:license [
		rdf:type dct:LicenseDocument ;
		rdf:about <http://dcat-ap.ch/vocabulary/licenses/terms_by> ;
		rdf:resource <http://purl.org/dc/terms/RightsStatement> ;
	] .
