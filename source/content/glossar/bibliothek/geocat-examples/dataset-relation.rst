.. code-block:: xml
    :caption: Example adding a resource of protocol "CHTOPO:specialised:geoportal" to ``dct:relation``
    :emphasize-lines: 3,19,20,21,30-32

     <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>https://map.geo.admin.ch</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">https://map.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">https://map.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">https://map.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">https://map.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>CHTOPO:specialised:geoportal</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Geoportal map.geo.admin.ch</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">Geoportal map.geo.admin.ch</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description gco:nilReason="missing" xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString/>
        </gmd:description>
     </gmd:CI_OnlineResource>
