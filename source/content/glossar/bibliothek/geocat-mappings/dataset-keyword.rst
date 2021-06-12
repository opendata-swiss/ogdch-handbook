:DCAT: :ref:`dct:keyword <dcat-dataset-keyword>`
:XPATH: ``//gmd:identificationInfo//gmd:descriptiveKeywords//gmd:keyword``
:Value: ``//gmd:textGroup//gmd:LocalisedCharacterString``
:Usage Notes:  all keywords with the Locale ``#DE``, ``#FR``, ``#EN``, ``#IT`` are taken.
              they keyword opendata.swiss is not taken: it works as a serach criteria, about
              what datasets are imported to opendata.swiss

.. code-block:: xml
    :caption: ISO-19139_che XPath for dct:keyword

    //gmd:identificationInfo//gmd:descriptiveKeywords//gmd:keyword//gmd:textGroup//gmd:LocalisedCharacterString
