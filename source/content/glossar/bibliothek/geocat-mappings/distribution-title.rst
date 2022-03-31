:DCAT: :ref:`dct:title <dcat-distribution-title>`
:XPATH: Mapping depends on the type of distribution that is derived from the protocol
:Protocol: ``//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString``
:Name:  ``.//gmd:distributionInfo//gmd:transferOptions//gmd:name``
:Usage Notes: The title of the distribution is derived by mapping the normed protocol name
              to a derived protocol name and then adding the name of the Distribution.

.. code-block:: xml
    :caption: relative XPath to the protocol of a Distribution

    .//gmd:distributionInfo//gmd:transferOptions//gmd:protocol/gco:CharacterString

.. code-block:: xml
    :caption: ISO-19139_che XPath for the name of a Distribution

    .//gmd:distributionInfo//gmd:transferOptions/gmd:name

.. code-block:: python
    :caption: Mapping of protocol names to dct:title of dcat:Distribution

    protocol_to_name_mapping = {
        "OGC:WMTS": "WMTS",
        "OGC:WMS": "WMS",
        "OGC:WFS": "WFS",
        "WWW:DOWNLOAD": "Download",
        "LINKED:DATA": "Linked Data (Dienst)",
        "MAP:Preview": "Map (Preview)",
        "ESRI:REST": "ESRI (Rest)"
    }
