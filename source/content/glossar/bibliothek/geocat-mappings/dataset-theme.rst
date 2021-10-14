:DCAT: :ref:`dct:theme <dcat-dataset-theme>`
:XPATH: ``//gmd:identificationInfo//gmd:topicCategory/``
:Mapping of values: Geocat topicCategory values are mapped to themes from the DCAT-AP CH themes vocabulary:
                    `in rdf <https://www.dcat-ap.ch/vocabulary/themes/20210623.rdf>`__
                    `in turtle <https://www.dcat-ap.ch/vocabulary/themes/20210623.ttl>`__
                    For details of the mapping, see below.

.. code-block:: xml
    :caption: getting category with XPATH

    //gmd:identificationInfo//gmd:topicCategory/gmd:MD_TopicCategoryCode

.. code-block:: python
    :caption: Mapping of topicCategory to themes

    swisstopo_to_ogdch_group_mapping = {
        'imageryBaseMapsEarthCover': ['geography', 'territory'],
        'imageryBaseMapsEarthCover_BaseMaps': ['geography', 'territory'],
        'imageryBaseMapsEarthCover_EarthCover': ['geography', 'territory'],
        'imageryBaseMapsEarthCover_Imagery': ['geography', 'territory'],
        'location': ['geography', 'territory'],
        'elevation': ['geography', 'territory'],
        'boundaries': ['geography', 'territory'],
        'planningCadastre': ['geography', 'territory'],
        'planningCadastre_Planning': ['geography', 'territory'],
        'planningCadastre_Cadastre': ['geography', 'territory'],
        'geoscientificInformation': ['geography', 'territory'],
        'geoscientificInformation_Geology': ['geography', 'territory'],
        'geoscientificInformation_Soils': ['geography', 'territory'],
        'geoscientificInformation_NaturalHazards': ['geography', 'territory'],
        'biota': ['geography', 'territory', 'agriculture'],
        'oceans': ['geography', 'territory'],
        'inlandWaters': ['geography', 'territory'],
        'climatologyMeteorologyAtmosphere': ['geography', 'territory'],
        'environment': ['geography', 'territory'],
        'environment_EnvironmentalProtection': ['geography', 'territory'],
        'environment_NatureProtection': ['geography', 'territory'],
        'society': ['geography', 'culture', 'population'],
        'health': ['geography', 'health'],
        'structure': ['geography', 'construction'],
        'transportation': ['geography', 'mobility'],
        'utilitiesCommunication': ['geography', 'territory', 'energy', 'culture'],
        'utilitiesCommunication_Energy': ['geography', 'energy', 'territory'],
        'utilitiesCommunication_Utilities': ['geography', 'territory'],
        'utilitiesCommunication_Communication': ['geography', 'culture'],
        'intelligenceMilitary': ['geography', 'public-order'],
        'farming': ['geography', 'agriculture'],
        'economy': ['geography', 'work', 'national-economy'],
    }
