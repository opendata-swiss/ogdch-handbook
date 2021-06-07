.. code-block:: xml
    :caption: In RDF the language is stored in the ``xml:lang`` attribute
    :emphasize-lines: 7,8,9,10

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv">
        <dct:title xml:lang="de">Hunde</dct:title>
        <dct:title xml:lang="fr">Chien</dct:title>
        <dct:title xml:lang="en">Dogs</dct:title>
        <dct:title xml:lang="it">Cani</dct:title>
      </dcat:Dataset>

    </rdf:RDF>
