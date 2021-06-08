:DCAT: dct:relation
:XPATH: ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
:Protocol: WWW:LINK-1.0-http--link
:Value: ``che:LocalisedURL``

.. code-block:: xml
    :caption: Every first link of the online resources gets put as landingPage, every additional link gets put into the relations.

    (//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
    [.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http--link"]
    //che:LocalisedURL)[position()>1]
