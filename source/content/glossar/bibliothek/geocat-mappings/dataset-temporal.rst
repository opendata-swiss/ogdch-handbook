:DCAT: :ref:`dct:temporal <dcat-dataset-temporal>`
:XPATH: ``//gmd:identificationInfo//gmd:extent//gmd:temporalElement``
:Value: ``//gml:TimePeriod/gml:beginPosition``, ``//gml:TimePeriod/gml:endPosition``

.. code-block:: xml
    :caption: getting temporals with XPATH

    //gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:beginPosition
    //gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:endPosition
