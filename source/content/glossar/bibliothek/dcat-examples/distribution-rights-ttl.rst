.. code-block:: Turtle
    :caption: the rights statement comes from a controlled vocabulary
    :emphasize-lines: 8

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg>
       a dcat:Distribution ;
       dcat:accessURL <http://stratigraphy.org/ICSchart/ChronostratChart2017-02.jpg> ;
       dct:rights "NonCommercialAllowed-CommercialAllowed-ReferenceRequired" .
