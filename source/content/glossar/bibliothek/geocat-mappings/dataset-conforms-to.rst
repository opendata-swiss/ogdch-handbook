:DCAT: :ref:`dct:conformsTo <dcat-dataset-conforms-to>`
:XPATH: ``che:CHEMD_Metadata/gmd:contentInfo/che:CHE_MD_FeatureCatalogueDescription/che:dataModel/``
:Value: ``.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel/text()``
:Usage Notes: 

.. code-block:: xml
    :caption: ISO-19139_che XPath for dct:conforms to

   
    .//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#DE"]/text()
    .//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURLL[@locale="#FR"]/text()
    .//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#EN"]/text()
    .//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#IT"]/text()
    .//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL/text()

