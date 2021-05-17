.. toggle-header::
    :header: Example for geocat mapping to ``dct:rights``

    .. code-block:: xml
        :caption: Example of getting dct:rights from gmd with ISO-19139_che XPath
        :emphasize-lines: 5

        <gmd:otherConstraints xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Freie Nutzung</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DE">Freie Nutzung</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
        </gmd:otherConstraints>

