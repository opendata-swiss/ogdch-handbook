:DCAT: dct:modified
:XPATH: ``//gmd:identificationInfo//gmd:citation//gmd:CI_Date``
:Role: ``revision``
:Value: ``//gco:Date`` or ``//gco:DateTime``

.. code-block:: xml
    :caption: The date for the role ``revision`` is taken

    //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime