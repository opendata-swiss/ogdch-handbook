:DCAT: :ref:`dcat:distribution <dcat-dataset-distribution>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource``
:protocol:  ``//gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol``
:Mapping: The mapping depends on the protocol. If the Protocol starts in the following way it is mapped to a
          dcat:Distribution: ``WWW:DOWNLOAD``, ``OGC:WMTS``, ``OGC:WFS``, ``OGC:WMS``,
          ``LINKED:DATA``, ``ESRI:REST``, ``MAP:Preview``

:Usage Notes: Only the above geocat Distributions will be mapped to dcat:Distribution. There are other protocols
              that will be mapped to dcat:landingPage and dct:relation.


.. code-block:: xml
    :caption: ISO-19139_che XPath for getting the protocols for the geocat distributions

    //gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString/text()
