:DCAT: :ref:`dcat:downloadURL <dcat-distribution-download-url>`
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: ``.//gmd:protocol/gco:CharacterString`` ``WWW:DOWNLOAD``
:Value: ``.//gmd:linkage/gmd:URL/text()``
:Fallback-Value: ``'.//che:LocalisedURL`` for any language
:Usage Notes: For the protocol ``WWW:DOWNLOAD`` the same url is mapped to both dcat:accessURL and dcat:downloadURL

.. code-block:: xml
    :caption: default path of the download url within the geocat distribution

    .//gmd:linkage//gmd:URL/text()
