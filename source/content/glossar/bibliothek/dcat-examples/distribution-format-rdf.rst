.. code-block:: xml
    :caption: The format is used for distributions that have no download url
    :emphasize-lines: 7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#"
             xmlns:dct="http://purl.org/dc/terms/">

      <dcat:Distribution rdf:about="https://data.tg.ch/api/v2/catalog/datasets/sk-stat-47/exports/csv">
        <dct:format rdf:resource="http://publications.europa.eu/resource/authority/file-type/CSV"/>
      </dcat:Distribution>

    </rdf:RDF>
