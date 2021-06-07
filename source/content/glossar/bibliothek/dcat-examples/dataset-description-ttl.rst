.. code-block:: Turtle
    :caption: Description of a Dataset using Markdown in Turtle
    :emphasize-lines: 6,7,8,9

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dc: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
      a dcat:Dataset ;
      dc:description """#Railway noises at night
                               - [read more here](https://swisstopo/railwaynoises.pdf"""@en, """#Eisenbahnlärm in der Nacht
                               - [eine ausführliche Beschreibung finden Sie hier]
                                 (https://swisstopo/railwaynoises.pdf)"""@de .

