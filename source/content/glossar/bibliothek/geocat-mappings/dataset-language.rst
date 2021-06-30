:DCAT: :ref:`dct:language <dcat-dataset-language>`
:XPATH: ``//gmd:identificationInfo//gmd:language``
:Value: ``gmd:LanguageCode``
:Usage Notes: only the languages German, French, Italian and English are mapped

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:language``

    //gmd:identificationInfo//gmd:language/gmd:LanguageCode

.. code-block:: python
    :caption: Mapping of the language code from a 3 letter code to 2 letter code

    language_mapping = {
        'ger': 'de',
        'fra': 'fr',
        'fre': 'fr',
        'eng': 'en',
        'ita': 'it',
    }
