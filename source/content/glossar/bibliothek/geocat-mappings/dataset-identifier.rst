:DCAT: dct:identifier
:XPATH: //gmd:fileIdentifier
:Value: gco:CharacterString/text()
:Format: the identifier should be of the form ``<id>@<organization-slug>``

.. code-block:: xml
    :caption: ISO-19139_che XPath for ``dct:identifier``

    //gmd:fileIdentifier/gco:CharacterString/text()
