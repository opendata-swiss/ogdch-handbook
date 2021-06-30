.. code-block:: xml
    :caption: Example of mapping to ``dct:language`` for a Distribution with protocol ``OGC:WMS``
    :emphasize-lines: 6,9

     <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>http://wms.geo.admin.ch/?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetCapabilities&amp;lang=de</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">http://wms.geo.admin.ch/?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetCapabilities&amp;lang=de</che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">http://wms.geo.admin.ch/?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetCapabilities&amp;lang=de</che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>OGC:WMS</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>ch.swisstopo:vd.spannungsarme:gebiete</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#FR">ch.swisstopo:vd.spannungsarme:gebiete
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">ch.swisstopo:vd.spannungsarme:gebiete
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Service WMS de geo.admin.ch</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#FR">Service WMS de geo.admin.ch</gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">WMS Dienst von geo.admin.ch</gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#IT">Servizio WMS di geo.admin.ch</gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#EN">WMS Service from geo.admin.ch</gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:description>
     </gmd:CI_OnlineResource>
