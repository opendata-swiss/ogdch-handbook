.. code-block:: xml
    :caption: Keywords are given as localized strings
    :emphasize-lines: 7,8,9,10,11

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dc="http://purl.org/dc/terms/">

      <dcat:Dataset rdf:about="https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv">
        <dct:keyword xml:lang="de">Hunde</dct:keyword>
        <dct:keyword xml:lang="de">statistics</dct:keyword>
        <dct:keyword xml:lang="fr">Chien</dct:keyword>
        <dct:keyword xml:lang="en">Dogs</dct:keyword>
        <dct:keyword xml:lang="it">Cani</dct:keyword>
      </dcat:Dataset>

    </rdf:RDF>
