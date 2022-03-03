.. code-block:: xml
    :caption: Example of mapping to ``dct:language`` for a Distribution with protocol ``WWW:DOWNLOAD``
    :emphasize-lines: 6,10,14,18

    <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>https://data.geo.admin.ch/ch.meteoschweiz.klima/phaenologie/data.zip</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">https://www.meteoschweiz.admin.ch/home/mess-und-prognosesysteme/bodenstationen/data.zip
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">https://www.meteosuisse.admin.ch/home/systemes-de-mesure-et-de-prevision/stations-au-sol/data.zip
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">https://www.meteosvizzera.admin.ch/home/sistemi-di-rilevamento-e-previsione/stazioni-al-suolo/data.zip
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">https://www.meteoswiss.admin.ch/home/measurement-and-forecasting-systems/land-based-stations/data.zip
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#RM">https://www.meteoschweiz.admin.ch/home/mess-und-prognosesysteme/bodenstationen/data.zip
                    </che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>WWW:DOWNLOAD</gco:CharacterString>
        </gmd:protocol>
    </gmd:CI_OnlineResource>
