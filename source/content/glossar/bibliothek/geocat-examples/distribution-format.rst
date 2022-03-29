.. code-block:: xml
    :caption: Example of mapping to ``dct:format`` for a Distribution with protocol "WWW:WMS" to "WMS"
    :emphasize-lines: 23

    <gmd:CI_OnlineResource>
        <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <gmd:URL>http://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&lang=fr</gmd:URL>
            <che:PT_FreeURL>
                <che:URLGroup>
                    <che:LocalisedURL locale="#FR">http://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&
                        REQUEST=GetCapabilities&lang=fr
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#DE">http://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&
                        REQUEST=GetCapabilities&lang=de
                    </che:LocalisedURL>
                </che:URLGroup>
                <che:URLGroup>
                    <che:LocalisedURL locale="#IT">http://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&
                        REQUEST=GetCapabilities&lang=it
                    </che:LocalisedURL>
                </che:URLGroup>
            </che:PT_FreeURL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>OGC:WMS</gco:CharacterString>
        </gmd:protocol>
        <gmd:name gco:nilReason="missing" xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString/>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#FR"/>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">ch.swisstopo-vd.ortschaftenverzeichnis_plz
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Service WMS de geo.admin.ch</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#FR">Service WMS de geo.admin.ch
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">WMS Dienst von geo.admin.ch
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#IT">Servizio WMS di geo.admin.ch
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#EN">WMS Service from geo.admin.ch
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:description>
    </gmd:CI_OnlineResource>
