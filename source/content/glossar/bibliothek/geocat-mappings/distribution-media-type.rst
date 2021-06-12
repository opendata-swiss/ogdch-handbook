:DCAT: :ref:`dcat:mediaType <dcat-distribution-media-type>`
:Usage-Notes: For protocol "WWW:DOWNLOAD" the media type is derived by spliting the protocol name:
              the protocol name is expected as ``<download-protocl>:<media-type>``.
              For protocols "OGC:WMTS", "OGC:WMS", "OGC:WFS", "LINKED:DATA", "MAP:Preview", "ESRI:REST" the dcat:mediaType is "SERVICE"

.. code-block:: xml
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
