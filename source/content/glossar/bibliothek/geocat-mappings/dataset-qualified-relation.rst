:DCAT: :ref:`dcat:qualifiedRelation <dcat-dataset-qualified-relation>`
:XPATH: ``//gmd:identificationInfo//gmd:aggregationInfo//gmd:aggregateDataSetIdentifier/gmd:MD_Identifier``
:Value: ``/gmd:code/gco:CharacterString``
:Mapping of Values: The geocat identifier is mapped to a dct:identifier by attaching ``@<organization-slug>``

.. code-block:: xml
    :caption: XPATH for dcat:qualifiedRelation: all such values are taken

    //gmd:identificationInfo//gmd:aggregationInfo//gmd:aggregateDataSetIdentifier/gmd:MD_Identifier/gmd:code/gco:CharacterString
