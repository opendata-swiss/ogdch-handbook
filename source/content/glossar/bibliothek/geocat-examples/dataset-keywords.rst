.. toggle-header::
    :header: Example for geocat mapping to ``dcat:keyword``

    .. code-block:: xml
        :caption: Example of getting dcat:keyword from gmd with ISO-19139_che XPath
        :emphasize-lines: 14

        <gmd:identificationInfo>
           <che:CHE_MD_DataIdentification gco:isoType="gmd:MD_DataIdentification">
               <gmd:citation>...</gmd:citation>
               <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:abstract>
               <gmd:purpose xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:purpose>
               <gmd:status>...</gmd:status>
               <gmd:pointOfContact xlink:show="embed">...</gmd:pointOfContact>
               <gmd:resourceMaintenance>...</gmd:resourceMaintenance>
               <gmd:descriptiveKeywords>
                 <gmd:MD_Keywords>
                   <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                     <gmd:PT_FreeText>
                       <gmd:textGroup>
                         <gmd:LocalisedCharacterString locale="#DE">e-geo.ch Geoportal</gmd:LocalisedCharacterString>
                       </gmd:textGroup>
                     </gmd:PT_FreeText>
                   </gmd:keyword>
                   <gmd:type>...</gmd:type>
                   <gmd:thesaurusName>...</gmd:thesaurusName>
                 </gmd:MD_Keywords>
               </gmd:descriptiveKeywords>
             <gmd:spatialRepresentationType>...</gmd:spatialRepresentationType>
             <gmd:language>...</gmd:language>
             <gmd:characterSet>...</gmd:characterSet>
             <gmd:topicCategory>...</gmd:topicCategory>
             <gmd:extent xlink:show="embed">...</gmd:extent>
             <che:basicGeodataID>...</che:basicGeodataID>
             <che:basicGeodataIDType>...</che:basicGeodataIDType>
           </che:CHE_MD_DataIdentification>
        </gmd:identificationInfo>

