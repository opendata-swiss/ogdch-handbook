:DCAT: :ref:`foaf:page <dcat-dataset-documentation>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: ``WWW:LINK``
:Value: ``.//gmd:linkage/gmd:URL/text()``
:Fallback-Value: ``'.//che:LocalisedURL`` for any language
:Usage Notes: The first resource with WWW:LINK protocol is mapped as dcat:landingPage. All other resources with WWW:LINK protocol are mapped as foaf:page.

.. code-block:: xml
    :caption: ISO-19139_che XPath for foaf:page

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource

.. code-block:: xml
    :caption: ISO-19139_che XPath for distribution protocol

    //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
