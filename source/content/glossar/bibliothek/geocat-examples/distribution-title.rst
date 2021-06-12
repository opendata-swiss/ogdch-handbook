.. code-block:: xml
    :caption: Example of mapping to dcat:mediaType for a Distribution with protocol "OGC:WFS"
              The derived title is "OGC:WFS (GetCapabilities) DE#WFS"
    :emphasize-lines: 19-21,26

     <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>http://wfs.geo.admin.ch</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">http://wfs.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">http://wfs.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">http://wfs.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#EN">http://wfs.geo.admin.ch</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>OGC:WFS</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>DE#WFS</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">DE#WFS</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
     </gmd:CI_OnlineResource>