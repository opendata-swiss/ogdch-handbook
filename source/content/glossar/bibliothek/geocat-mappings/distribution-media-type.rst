**Geocat-Mapping**

:Notes: depends on the protocol

.. code-block:: xml
    :caption: Getting the media type for geodata

    .//gmd:distributionInfo//gmd:distributionFormat//gmd:name/gco:CharacterString

.. code-block:: xml
    :caption: Getting the media type for geoservices

    //gmd:identificationInfo//srv:serviceType/gco:LocalName
