.. code-block:: xml
    :caption: Description of a Dataset using Markdown in RDF
    :emphasize-lines: 7,8,9,10,11

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dct:description xml:lang="en">#Railway noises at night
                                      - [read more here](https://swisstopo/railwaynoises.pdf</dct:description>
        <dct:description xml:lang="de">#Eisenbahnlärm in der Nacht
                                      - [eine ausführliche Beschreibung finden Sie hier]
                                        (https://swisstopo/railwaynoises.pdf)</dct:description>
      </dcat:Dataset>

    </rdf:RDF>
