

    .. code-block:: xml
        :caption: In RDF the language is stored in the ``xml:lang`` attribute
        :emphasize-lines: 7,8,9,10

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:dcat="http://www.w3.org/ns/dcat#"
               xmlns:dc="http://purl.org/dc/terms/">

           <dcat:Distribution rdf:about="https://tierstatistik.identitas.ch/data/fig-dogs-pyr.csv">
              <dc:title xml:lang="de">Hunde</dc:title>
              <dc:title xml:lang="fr">Chien</dc:title>
              <dc:title xml:lang="en">Dogs</dc:title>
              <dc:title xml:lang="it">Cani</dc:title>
           </dcat:Distribution>

        </rdf:RDF>