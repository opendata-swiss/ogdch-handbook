.. toggle-header::
    :header: Example for geocat mapping to ``dcat:downloadURL``

    .. code-block:: xml
        :caption: Example of getting dcat:downloadURL from gmd with ISO-19139_che XPath
        :emphasize-lines: 5,10

        <gmd:CI_OnlineResource>
           <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
             <che:PT_FreeURL>
               <che:URLGroup>
                 <che:LocalisedURL locale="#DE">http://data.geo.admin.ch/ch.blw.klimaeignung-kulturland/data.zip</che:LocalisedURL>
               </che:URLGroup>
             </che:PT_FreeURL>
           </gmd:linkage>
           <gmd:protocol>
             <gco:CharacterString>WWW:DOWNLOAD-URL</gco:CharacterString>
           </gmd:protocol>
           <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
           <gmd:function>...</gmd:function>
        </gmd:CI_OnlineResource>
