:DCAT: :ref:`dct:format <dcat-distribution-format>`
:Usage-Notes: For protocol "WWW:DOWNLOAD" the format is derived in the same way as the
              :ref:`media type <geocat-distribution-media-type>`.
              For the other protocols the format is derived from the protocol
              as described in the mapping below.

.. code-block::
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol

.. code-block:: python
    :caption: Mapping of protocol names to dct:format of dcat:Distribution

    protocol_to_format_mapping = {
        "OGC:WMTS": "WMTS",
        "OGC:WMS": "WMS",
        "OGC:WFS": "WFS",
        "ESRI:REST": "API"
    }
