.. toggle-header::
    :header: Example for geocat mapping to ``dct:language``

    .. code-block:: xml
        :caption: The language is taken from the localizedURL ``locale``
        :emphasize-lines: 6

        <gmd:CI_OnlineResource>
           <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
           <gmd:URL>...</gmd:URL>
           <che:PT_FreeURL>
             <che:URLGroup>
               <che:LocalisedURL locale="#EN">
                 https://www.bafu.admin.ch/bafu/en/home/office/divisions-sections/noise-and-nir-division.html
               </che:LocalisedURL>
               </che:URLGroup>
           </che:PT_FreeURL>
           </gmd:linkage>
           <gmd:protocol>...</gmd:protocol>
        </gmd:CI_OnlineResource>

