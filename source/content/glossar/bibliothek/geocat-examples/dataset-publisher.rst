.. toggle-header::
    :header: Example for geocat mapping to ``dct:publisher``

    .. code-block:: xml
        :caption: The role publisher is taken in this example
        :emphasize-lines: 4,17,18

        <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
                <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                    <gco:CharacterString>Geoinformationszentrum (GIS) Stadt Luzern</gco:CharacterString>
                    <gmd:PT_FreeText>
                        <gmd:textGroup>
                            <gmd:LocalisedCharacterString locale="#EN"/>
                        </gmd:textGroup>
                        <gmd:textGroup>
                            <gmd:LocalisedCharacterString locale="#DE">Geoinformationszentrum (GIS) Stadt
                                Luzern
                            </gmd:LocalisedCharacterString>
                        </gmd:textGroup>
                    </gmd:PT_FreeText>
                </gmd:organisationName>
                <gmd:role>
                    <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_RoleCode"
                                     codeListValue="publisher"/>
                </gmd:role>
            </gmd:CI_ResponsibleParty>
        </gmd:pointOfContact>