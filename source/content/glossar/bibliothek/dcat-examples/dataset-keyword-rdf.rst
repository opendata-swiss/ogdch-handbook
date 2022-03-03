.. code-block:: xml
    :caption: Keywords are given as localized strings
    :emphasize-lines: 6,7,8,9,10

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Dataset rdf:about="https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv">
        <dcat:keyword xml:lang="de">Hunde</dcat:keyword>
        <dcat:keyword xml:lang="de">statistics</dcat:keyword>
        <dcat:keyword xml:lang="fr">Chien</dcat:keyword>
        <dcat:keyword xml:lang="en">Dogs</dcat:keyword>
        <dcat:keyword xml:lang="it">Cani</dcat:keyword>
      </dcat:Dataset>

    </rdf:RDF>
