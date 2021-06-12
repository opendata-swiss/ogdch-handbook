:DCAT: :ref:`dct:issued <dcat-dataset-issued>`
:XPATH: ``//gmd:identificationInfo//gmd:citation//gmd:CI_Date``
:Role: ``publication`` or ``creation`` or ``revision``
:Value: ``.//gco:Date or `.//gco:DateTime`
:Usage Notes: This also serves as dct:issued for dcat:Distribution


.. code-block:: xml
    :caption: The first found date is taken in the order defined below:

    //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "publication"]//gco:Date or gco:DateTime
    //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "creation"]//gco:Date or gco:DateTime
    //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime
