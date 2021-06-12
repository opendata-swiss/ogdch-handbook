:DCAT: :ref:`dcat:accessURL <dcat-distribution-access-url>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Mapping: The mapping depends on the protocol. If the Protocol starts in the following way it is mapped to a
          dcat:Distribution: ``WWW:DOWNLOAD``, ``"OGC:WMTS``, ``OGC:WFS``, ``"OGC:WMS``, ``LINKED:DATA``, ``ESRI:REST``, ``MAP:Preview``
:Value: ``.//gmd:linkage/gmd:URL/text()``
:Fallback-Value: ``'.//che:LocalisedURL`` for any language
:Usage Notes: For the protocol ``WWW:DOWNLAD`` the protocol should include the format of the resource: for example ``WWW:DOWNLAD:INTERLIS``

.. code-block:: xml
    :caption: ISO-19139_che XPath for geocat distribution`

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource

.. code-block:: xml
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
