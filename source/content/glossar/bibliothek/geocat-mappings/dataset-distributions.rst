**Geocat-Mapping**

:XPATH: ?
   :protocol:  //gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
:Value: ?
:Usage Notes: some Distributions are mapped onto dcat:distribution, it depends on the protocol


.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dcat:distribution``: the first is taken in the following order

    //gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString/text() =
    - "WWW:DOWNLOAD-1.0-http–download"
    - "OGC:WMTS-http-get-capabilities"
    - "OGC:WMS-http-get-map"
    - "OGDC:WMS-http-get-capabilities"
    - "OGC:WFS-http-get-capabilities"
    - "WWW:DOWNLOAD-URL"]
    //gmd:identificationInfo//srv:containsOperations/srv:SV_OperationMetadata[.//srv:operationName//gco:CharacterString/text()]
