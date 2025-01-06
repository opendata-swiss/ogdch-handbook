:DCAT: :ref:`dct:publisher <dcat-dataset-publisher>`
:XPATH: ``//gmd:identificationInfo/gmd:pointOfContact`` or ``//gmd:contact//che:CHE_CI_ResponsibleParty`` (fallback value)
:Filter: ``.//gmd:CI_RoleCode/@codeListValue``
:Value: ``.//gmd:organisationName/gco:CharacterString/text()``
:Usage Notes: The publisher consists of a name and a uri.
              Currently only the publisher name is mapped from the geocat dataset:
              For the uri the url of the organization that the dataset belongs on
              opendata.swiss is taken: https://opendata.swiss/de/organization.

              gmd:contact is the metadata contact registered in geocat.ch and is only used as a fallback value.

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:publisher``: the first is taken in the following order:

    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:organisationName/gco:CharacterString
    //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:organisationName/gco:CharacterString
    //gmd:contact//che:CHE_CI_ResponsibleParty//gmd:organisationName/gco:CharacterString
