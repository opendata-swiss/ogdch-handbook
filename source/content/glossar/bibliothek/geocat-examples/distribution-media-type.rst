.. code-block:: xml
    :caption: Example of mapping to ``dcat:mediaType`` for a Distribution with protocol "WWW:DOWNLOAD:INTERLIS"
    :emphasize-lines: 20

    <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>https://data.geo.admin.ch</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">https://data.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">https://data.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">https://data.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">https://data.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>WWW:DOWNLOAD:INTERLIS</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Datenbezug über data.geo.admin</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">Datenbezug über data.geo.admin</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description gco:nilReason="missing" xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString/>
        </gmd:description>
        <gmd:function>
            <gmd:CI_OnLineFunctionCode
                codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_OnLineFunctionCode"
                codeListValue="download"/>
        </gmd:function>
    </gmd:CI_OnlineResource>
