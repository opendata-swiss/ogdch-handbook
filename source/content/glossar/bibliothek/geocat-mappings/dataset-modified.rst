:DCAT: :ref:`dct:modified <dcat-dataset-modified>`
:XPATH: ``//gmd:identificationInfo//gmd:citation//gmd:CI_Date``
:Role: ``revision``
:Value: ``//gco:Date`` or ``//gco:DateTime``
:Usage Notes: This also serves as dct:modified for dcat:Distribution

.. code-block:: xml
    :caption: The date for the role ``revision`` is taken

    //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime