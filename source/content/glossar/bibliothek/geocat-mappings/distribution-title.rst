:DCAT: dct:title
:XPATH: Mapping depends on the type of distribution that is derived from the protocol
:Protocol: //gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString
:Name: .//gmd:distributionInfo//gmd:transferOptions/gmd:name
:Notes: Mapping depends on the type of distribution that is derived from the protocol
        see above.
        For geodata: derived from protocol(//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString)
        and name (.//gmd:distributionInfo//gmd:transferOptions/gmd:name)
        In geoservices: .//srv:operationName/gco:CharacterString
:Mapping:
    :"OGC:WMTS-http-get-capabilities": "WMTS (GetCapabilities)"
    :"OGC:WMS-http-get-map": "WMS (GetMap)"
    :"OGC:WMS-http-get-capabilities": "WMS (GetCapabilities)"
    :"OGC:WFS-http-get-capabilities": "WFS (GetCapabilities)"
    :"WWW:DOWNLOAD-1.0-http--download": "Download"
    :"W"WW:DOWNLOAD-URL": "Download"


.. code-block:: xml
    :caption: ISO-19139_che XPath for the protocol

    //gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString

.. code-block:: xml
    :caption: ISO-19139_che XPath for the name

    .//gmd:distributionInfo//gmd:transferOptions/gmd:name

.. code-block:: xml
    :caption: ISO-19139_che XPath for the geoservice

    .//srv:operationName/gco:CharacterString
