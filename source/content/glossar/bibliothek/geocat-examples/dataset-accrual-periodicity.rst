.. code-block:: xml
    :caption: The role publisher is taken in this example
    :emphasize-lines: 6

    <gmd:identificationInfo>
       <che:CHE_MD_DataIdentification gco:isoType="gmd:MD_DataIdentification">
         <gmd:resourceMaintenance>
           <che:CHE_MD_MaintenanceInformation gco:isoType="gmd:MD_MaintenanceInformation">
             <gmd:maintenanceAndUpdateFrequency>
               <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="userDefined"/>
             </gmd:maintenanceAndUpdateFrequency>
             <gmd:userDefinedMaintenanceFrequency>...</gmd:userDefinedMaintenanceFrequency>
             <che:appraisal>...</che:appraisal>
           </che:CHE_MD_MaintenanceInformation>
         </gmd:resourceMaintenance>
       </che:CHE_MD_DataIdentification>
    </gmd:identificationInfo>
