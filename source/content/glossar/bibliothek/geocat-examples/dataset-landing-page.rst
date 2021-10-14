.. code-block:: xml
    :caption: Mapping of the landing page from the first resource with protocol ``WWW:LINK``
    :emphasize-lines: 3,19,20,21

    <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>https://swisstopo.admin.ch</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">https://swisstopo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">https://swisstopo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">https://swisstopo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">https://swisstopo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>WWW:LINK</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Landing Page</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">Landing Page</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description gco:nilReason="missing" xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString/>
        </gmd:description>
        <gmd:function>
            <gmd:CI_OnLineFunctionCode
                codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_OnLineFunctionCode"
                codeListValue="information"/>
        </gmd:function>
    </gmd:CI_OnlineResource>
