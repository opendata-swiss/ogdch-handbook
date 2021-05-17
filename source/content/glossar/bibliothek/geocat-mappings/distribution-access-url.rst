**Geocat-Mapping**

:XPATH: ``//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol``
:Value: ``che:LocalisedURL``

.. code-block:: xml
    :caption: download url is recognized from the protocol

    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMTS-http-get-capabilities"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMS-http-get-map"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMS-http-get-capabilities"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WFS-http-get-capabilities"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "CHTOPO:specialised-geoportal"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http–link"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:DOWNLOAD-1.0-http--download"]//che:LocalisedURL
    .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:DOWNLOAD-URL"]//che:LocalisedURL
    .//srv:connectPoint//gmd:linkage//che:LocalisedURL
