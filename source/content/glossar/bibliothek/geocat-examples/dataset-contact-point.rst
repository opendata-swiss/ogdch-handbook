.. code-block:: xml
    :caption: //gmd:contact the role "pointOfContact" is taken for dcat:contactPoint
    :emphasize-lines: 48,49,50,88,89,90,91

    <gmd:contact xlink:show="embed">
        <che:CHE_CI_ResponsibleParty xmlns:geonet="http://www.fao.org/geonetwork" gco:isoType="gmd:CI_ResponsibleParty">
            <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>Bundesamt für Raumentwicklung</gco:CharacterString>
                <gmd:PT_FreeText>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DE">Bundesamt für Raumentwicklung
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#FR">Office fédéral du développement territorial
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#IT">Ufficio federale dello sviluppo territoriale
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#EN">Federal Office for Spatial Development
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#RM">Bundesamt für Raumentwicklung
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                </gmd:PT_FreeText>
            </gmd:organisationName>
            <gmd:contactInfo>
                <gmd:CI_Contact>
                    <gmd:phone>
                        <che:CHE_CI_Telephone gco:isoType="gmd:CI_Telephone">
                            <che:directNumber>
                                <gco:CharacterString>+41 58 462 01 43</gco:CharacterString>
                            </che:directNumber>
                        </che:CHE_CI_Telephone>
                    </gmd:phone>
                    <gmd:address>
                        <che:CHE_CI_Address gco:isoType="gmd:CI_Address">
                            <gmd:city>
                                <gco:CharacterString>Ittigen</gco:CharacterString>
                            </gmd:city>
                            <gmd:postalCode>
                                <gco:CharacterString>3063</gco:CharacterString>
                            </gmd:postalCode>
                            <gmd:country>
                                <gco:CharacterString>CH</gco:CharacterString>
                            </gmd:country>
                            <gmd:electronicMailAddress>
                                <gco:CharacterString>rolf.giezendanner@are.admin.ch</gco:CharacterString>
                            </gmd:electronicMailAddress>
                            <che:streetName>
                                <gco:CharacterString>Worblentalstrasse</gco:CharacterString>
                            </che:streetName>
                            <che:streetNumber>
                                <gco:CharacterString>66</gco:CharacterString>
                            </che:streetNumber>
                        </che:CHE_CI_Address>
                    </gmd:address>
                    <gmd:onlineResource>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
                                <gmd:URL>http://www.are.admin.ch</gmd:URL>
                                <che:PT_FreeURL>
                                    <che:URLGroup>
                                        <che:LocalisedURL locale="#DE">http://www.are.admin.ch</che:LocalisedURL>
                                    </che:URLGroup>
                                    <che:URLGroup>
                                        <che:LocalisedURL locale="#FR">http://www.are.admin.ch</che:LocalisedURL>
                                    </che:URLGroup>
                                    <che:URLGroup>
                                        <che:LocalisedURL locale="#IT">http://www.are.admin.ch</che:LocalisedURL>
                                    </che:URLGroup>
                                    <che:URLGroup>
                                        <che:LocalisedURL locale="#EN">http://www.are.admin.ch</che:LocalisedURL>
                                    </che:URLGroup>
                                    <che:URLGroup>
                                        <che:LocalisedURL locale="#RM">http://www.are.admin.ch</che:LocalisedURL>
                                    </che:URLGroup>
                                </che:PT_FreeURL>
                            </gmd:linkage>
                            <gmd:protocol>
                                <gco:CharacterString>text/html</gco:CharacterString>
                            </gmd:protocol>
                        </gmd:CI_OnlineResource>
                    </gmd:onlineResource>
                </gmd:CI_Contact>
            </gmd:contactInfo>
            <gmd:role>
                <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_RoleCode"
                                 codeListValue="pointOfContact"/>
            </gmd:role>
            <che:individualFirstName>
                <gco:CharacterString>Rolf</gco:CharacterString>
            </che:individualFirstName>
            <che:individualLastName>
                <gco:CharacterString>Giezendanner</gco:CharacterString>
            </che:individualLastName>
            <che:organisationAcronym xsi:type="gmd:PT_FreeText_PropertyType">
                <gco:CharacterString>ARE</gco:CharacterString>
                <gmd:PT_FreeText>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DE">ARE</gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#FR">ARE</gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#IT">ARE</gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#EN">ARE</gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#RM">ARE</gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                </gmd:PT_FreeText>
            </che:organisationAcronym>
        </che:CHE_CI_ResponsibleParty>
    </gmd:contact>