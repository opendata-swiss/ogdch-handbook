.. code-block:: xml
    :caption: Example of mapping to the ``dcat:accessURL`` for a distribution of protocol "LINKED:DATA"
    :emphasize-lines: 3,19,20,21

     <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>https://ld.geo.admin.ch/data/swissBOUNDARIES3D</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">https://ld.geo.admin.ch/data/swissBOUNDARIES3D</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">https://ld.geo.admin.ch/data/swissBOUNDARIES3D</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">https://ld.geo.admin.ch/data/swissBOUNDARIES3D</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">https://ld.geo.admin.ch/data/swissBOUNDARIES3D</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>LINKED:DATA</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>LD</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">LD</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
     </gmd:CI_OnlineResource>
