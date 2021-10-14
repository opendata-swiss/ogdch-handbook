.. code-block:: xml
    :caption: Example of getting ``dct:description`` for ``dcat:Distribution`` from a geocat distribution
    :emphasize-lines: 18-26

    <gmd:CI_OnlineResource>
        <gmd:linkage>
            <gmd:URL>https://map.geo.admin.ch/?layers=ch.bfe.energiestaedte
            </gmd:URL>
        </gmd:linkage>
        <gmd:protocol>
            <gco:CharacterString>MAP:Preview</gco:CharacterString>
        </gmd:protocol>
        <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Map Preview</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">Map Preview
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:name>
        <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>map preview</gco:CharacterString>
            <gmd:PT_FreeText>
                <gmd:textGroup>
                    <gmd:LocalisedCharacterString locale="#DE">map preview
                    </gmd:LocalisedCharacterString>
                </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:description>
    </gmd:CI_OnlineResource>
