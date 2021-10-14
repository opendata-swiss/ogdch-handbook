:DCAT: :ref:`dct:identifier <dcat-dataset-identifier>`
:XPATH: ``//gmd:fileIdentifier``
:Value: ``gco:CharacterString/text()``
:Usage Notes: the internal id of the dataset is taken from the XPath ``//gmd:fileIdentifier``
              and combined with the slug of the publishing organization to form the value of
              ``dct:identifier``, with the format ``<id>@<organization-slug>``.

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:identifier``

    //gmd:fileIdentifier/gco:CharacterString/text()
