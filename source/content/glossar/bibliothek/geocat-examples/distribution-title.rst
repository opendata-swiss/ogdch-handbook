.. toggle-header::
    :header: Example for geocat mapping to ``dct:title``

    .. code-block:: xml
        :caption: Example of getting dct:title from gmd with ISO-19139_che XPath

        :emphasize-lines: 7

        <gmd:transferOptions>
           <gmd:MD_DigitalTransferOptions>
             <gmd:onLine>
               <gmd:CI_OnlineResource>
                 <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">...</gmd:linkage>
                 <gmd:protocol>
                   <gco:CharacterString>WWW:LINK-1.0-http--link</gco:CharacterString>
                 </gmd:protocol>
                 <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
                 <gmd:function>...</gmd:function>
               </gmd:CI_OnlineResource>
               </gmd:onLine>
           </gmd:MD_DigitalTransferOptions>
        </gmd:transferOptions>
