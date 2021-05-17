.. toggle-header::
    :header: Example for geocat mapping to ``dct:description``

    .. code-block:: xml
        :caption: Example of getting dct:description from gmd with ISO-19139_che XPath
        :emphasize-lines: 5,8,11,14

        <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
           <gco:CharacterString>Download Server von geo.admin.ch</gco:CharacterString>
           <gmd:PT_FreeText>
             <gmd:textGroup>
               <gmd:LocalisedCharacterString locale="#DE">Download Server von geo.admin.ch</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
               <gmd:LocalisedCharacterString locale="#FR">Serveur de téléchargement de geo.admin.ch</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
               <gmd:LocalisedCharacterString locale="#EN">Download server from geo.admin.ch</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
               <gmd:LocalisedCharacterString locale="#IT">Server di download di geo.admin.ch</gmd:LocalisedCharacterString>
             </gmd:textGroup>
           </gmd:PT_FreeText>
        </gmd:description>
