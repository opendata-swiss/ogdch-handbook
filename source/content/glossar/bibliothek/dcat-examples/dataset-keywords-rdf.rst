.. toggle-header::
    :header: Property ``dct:keyword`` of ``dcat:Dataset`` in RDF

    .. code-block:: xml
        :caption: Keywords are given as localized strings
        :emphasize-lines: 7,8,9,10,11

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dc="http://purl.org/dc/terms/">

          <dcat:Dataset rdf:about="https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv">
            <dc:keyword xml:lang="de">Hunde</dc:keyword>
            <dc:keyword xml:lang="de">statistics</dc:keyword>
            <dc:keyword xml:lang="fr">Chien</dc:keyword>
            <dc:keyword xml:lang="en">Dogs</dc:keyword>
            <dc:keyword xml:lang="it">Cani</dc:keyword>
          </dcat:Dataset>

        </rdf:RDF>
