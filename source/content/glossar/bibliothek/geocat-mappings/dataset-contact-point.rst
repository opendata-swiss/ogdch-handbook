:DCAT: :ref:`dcat:contactPoint <dcat-dataset-contact-point>`
:XPATH: ``//gmd:identificationInfo/gmd:pointOfContact or //gmd:contact`` (fallback value) 
:Value: ``gmd:electronicMailAddress/gco:CharacterString``
:Usage Notes: Only one contact email is taken. A corresponding name is not taken. 
              
              gmd:contact is the metadata contact registered in geocat.ch and is only used as a fallback value.

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dcat:contactPoint``: the first is taken in the following order

    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
    //gmd:contact//che:CHE_CI_ResponsibleParty//gmd:address//gmd:electronicMailAddress/gco:CharacterString
