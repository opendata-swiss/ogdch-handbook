:DCAT: :ref:`dcat:landingPage <dcat-dataset-landing-page>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: ``WWW:LINK``, ``WWW:LINK-1.0-http--link``
:Value: ``.//gmd:linkage/gmd:URL/text()``
:Fallback-Value: ``'.//che:LocalisedURL`` for any language
:Usage Notes: The protocol ``WWW:LINK-1.0-http--link`` is deprecated, please use ``WWW:LINK`` instead

.. code-block:: xml
    :caption: ISO-19139_che XPath for geocat distribution

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource

.. code-block:: xml
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
