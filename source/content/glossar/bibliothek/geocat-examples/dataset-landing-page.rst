.. toggle-header::
    :header: Example for geocat mapping to ``dcat:langingPage``

    .. code-block:: xml
        :caption: Mapping of the landing page from a resource with protocol ``WWW:LINK-1.0-http--link``
        :emphasize-lines: 10

        <gmd:distributionInfo>
           <gmd:MD_Distribution>
             <gmd:distributionFormat xlink:show="embed">...</gmd:distributionFormat>
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
           </gmd:MD_Distribution>
        </gmd:distributionInfo>
