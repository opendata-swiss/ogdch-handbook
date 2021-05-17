**Geocat-Mapping**

:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: WWW:LINK-1.0-http--link
:Value: ``che:LocalisedURL``

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dcat:landingPage``

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
    [.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http--link"]//che:LocalisedURL
