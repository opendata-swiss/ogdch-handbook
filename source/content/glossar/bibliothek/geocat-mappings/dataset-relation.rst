:DCAT: :ref:`dct:relation <dcat-dataset-relation>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: ``WWW:LINK``, ``CHTOPO:specialised-geoportal``, ``WWW:LINK-1.0-http--link``
:Value: For the url: ``.//gmd:linkage/gmd:URL/text()``; for the text: ``.//gmd:description``
:Fallback-Value: For the url: ``.//che:LocalisedURL`` for any language; for the text: the url is used as a fallback
:Usage Notes: The protocol ``WWW:LINK-1.0-http--link`` is deprecated, please use ``WWW:LINK`` instead
              The first ``WWWW:LINK`` is taken as dcat:landingPage, all further ``WWW-LINK`` Resources are
              added to dct:relation

.. code-block:: xml
    :caption: ISO-19139_che XPath for geocat distribution`

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource

.. code-block:: xml
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
