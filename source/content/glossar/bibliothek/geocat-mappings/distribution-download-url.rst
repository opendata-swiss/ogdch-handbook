**Geocat-Mapping**

:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: `.//gmd:protocol/gco:CharacterString`` WWW:DOWNLOAD
:Value: ``che:LocalisedURL``

.. code-block:: xml
    :caption: download url is recognized from the protocol

    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text()
    [contains(.,"WWW:DOWNLOAD")]]//che:LocalisedURL