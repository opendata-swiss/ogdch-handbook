.. toggle-header::
    :header: Property ``dcat:contactPoints`` of ``dcat:Dataset`` in RDF

    .. code-block:: xml
        :caption: vcard:Kind is a class: choose between ``vcard:Organization`` and ``vcard:Individuel``
        :emphasize-lines: 8,9,10,11,15,16,17,18

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:vcard="http://www.w3.org/2006/vcard/ns#">

          <dcat:Dataset rdf:about="https://swisstopo/123">
            <dcat:contactPoint>
              <vcard:Organization>
                <vcard:fn>Abteilung Lärm BAFU</vcard:fn>
                <vcard:hasEmail rdf:resource="mailto:noise@bafu.admin.ch"/>
              </vcard:Organization>
            </dcat:contactPoint>

            <dcat:contactPoint>
              <vcard:Individual>
                <vcard:fn>Sekretariat BAFU</vcard:fn>
                <vcard:hasEmail rdf:resource="mailto:sekretariat@bafu.admin.ch"/>
              </vcard:Individual>
            </dcat:contactPoint>

          </dcat:Dataset>

        </rdf:RDF>
