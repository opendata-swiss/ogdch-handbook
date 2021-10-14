.. code-block:: xml
   :caption: Example of getting ``dct:title``. Only four languages are taken: DE, EN, FR, IT.
   :emphasize-lines: 6, 11, 16, 21

   <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
     <gco:CharacterString>Lärmbelastung durch Eisenbahnverkehr (Lr_Nacht)</gco:CharacterString>
     <gmd:PT_FreeText>
       <gmd:textGroup>
         <gmd:LocalisedCharacterString locale="#FR">
           Exposition au bruit du trafic ferroviaire (Lr_nuit)
         </gmd:LocalisedCharacterString>
       </gmd:textGroup>
       <gmd:textGroup>
         <gmd:LocalisedCharacterString locale="#DE">
           Lärmbelastung durch Eisenbahnverkehr (Lr_Nacht)
         </gmd:LocalisedCharacterString>
       </gmd:textGroup>
       <gmd:textGroup>
         <gmd:LocalisedCharacterString locale="#EN">
           Nighttime railway noise exposure
         </gmd:LocalisedCharacterString>
       </gmd:textGroup>
       <gmd:textGroup>
         <gmd:LocalisedCharacterString locale="#IT">
           Esposizione al rumore del traffico ferroviario (Lr_notte)
         </gmd:LocalisedCharacterString>
       </gmd:textGroup>
       <gmd:textGroup>
         <gmd:LocalisedCharacterString locale="#RM">
           Grevezza da canera tras il traffic da viafier durant la notg
         </gmd:LocalisedCharacterString>
       </gmd:textGroup>
     </gmd:PT_FreeText>
   </gmd:title>
