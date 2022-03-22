.. code-block:: xml
    :caption: Example of getting rights statements from ``//gmd:resourceConstraints//gmd:otherConstraints``.
    :emphasize-lines: 7-10,12-14,17-20,23-25

    <gmd:resourceConstraints>
        <gmd:MD_LegalConstraints>
            <gmd:otherConstraints xsi:type="gmd:PT_FreeText_PropertyType">
                <gmx:Anchor>Opendata BY: Freie Nutzung. Quellenangabe ist Pflicht.</gmx:Anchor>
                <gmd:PT_FreeText>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DE">Opendata BY: Freie Nutzung. Quellenangabe
                            ist Pflicht.
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#FR">Opendata BY: Utilisation libre.
                            Obligation d’indiquer la source.
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#IT">Opendata BY: Libero utilizzo. Indicazione
                            della fonte obbligatoria.
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                    <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#EN">Opendata BY: Open use. Must provide the
                            source.
                        </gmd:LocalisedCharacterString>
                    </gmd:textGroup>
                </gmd:PT_FreeText>
            </gmd:otherConstraints>
        </gmd:MD_LegalConstraints>
    </gmd:resourceConstraints>
