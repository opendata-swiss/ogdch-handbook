:DCAT: :ref:`dct:title <dcat-dataset-title>`
:XPATH: ``//gmd:identificationInfo//gmd:citation//gmd:title``
:Value: ``.//gmd:textGroup/gmd:LocalisedCharacterString[@locale="<lang code>"]/text()``
:Fallback-Value: ``.//gmd:CharacterString/text()``
:Usage Notes: <lang code> is expected as ``DE``, ``EN``, ``FR``, ``IT``. In case the localized strings are not there the Fallback will
       be used for all 4 languages

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:title``

    //gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
    //gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
    //gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
    //gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
    //gmd:identificationInfo//gmd:citation//gmd:title//gmd:CharacterString/text()
