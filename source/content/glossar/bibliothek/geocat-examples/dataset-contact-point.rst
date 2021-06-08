.. code-block:: xml
    :caption: The role publisher is taken in this example
    :emphasize-lines: 8,15,16

    <gmd:pointOfContact>
        <gmd:CI_ResponsibleParty>
            <gmd:contactInfo>
                <gmd:CI_Contact>
                    <gmd:address>
                        <gmd:CI_Address>
                            <gmd:electronicMailAddress>
                                <gco:CharacterString>gis@stadtluzern.ch</gco:CharacterString>
                            </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                    </gmd:address>
                </gmd:CI_Contact>
            </gmd:contactInfo>
            <gmd:role>
                <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_RoleCode"
                                 codeListValue="publisher"/>
            </gmd:role>
        </gmd:CI_ResponsibleParty>
    </gmd:pointOfContact>
