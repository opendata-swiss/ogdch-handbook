:DCAT: :ref:`dct:publisher <dcat-dataset-publisher>`
:XPATH: ``//gmd:identificationInfo/gmd:pointOfContact`` or ``//gmd:contact//che:CHE_CI_ResponsibleParty``
:Filter: ``.//gmd:CI_RoleCode/@codeListValue``
:Value: ``.//gmd:organisationName/gco:CharacterString/text()``
:Usage Notes: Only the non-localized string is taken. The exact mapping is described below.

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:publisher``: the first is taken in the following order:

    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:organisationName/gco:CharacterString
    //gmd:contact//che:CHE_CI_ResponsibleParty//gmd:organisationName/gco:CharacterString
