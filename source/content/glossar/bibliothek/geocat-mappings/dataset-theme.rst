:DCAT URI: dct:theme
:XPATH: //gmd:identificationInfo//gmd:topicCategory/
:Value: gmd:MD_TopicCategoryCode
:Mapping:
    :imageryBaseMapsEarthCover: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :imageryBaseMapsEarthCover_BaseMaps: https://opendata.swiss/group/geography, 
                                         https://opendata.swiss/group/territory
    :imageryBaseMapsEarthCover_EarthCover: https://opendata.swiss/group/geography, 
                                           https://opendata.swiss/group/territory
    :imageryBaseMapsEarthCover_Imagery: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :location: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :elevation: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :boundaries: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :planningCadastre: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :planningCadastre_Planning: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :planningCadastre_Cadastre: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :geoscientificInformation: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :geoscientificInformation_Geology: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :geoscientificInformation_Soils: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :geoscientificInformation_NaturalHazards: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :biota: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory,
            https://opendata.swiss/group/agriculture
    :oceans: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :inlandWaters: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :climatologyMeteorologyAtmosphere: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :environment: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :environment_EnvironmentalProtection: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :environment_NatureProtection: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :society: https://opendata.swiss/group/geography, https://opendata.swiss/group/culture,
              https://opendata.swiss/group/population
    :health: https://opendata.swiss/group/geography, https://opendata.swiss/group/health
    :structure: https://opendata.swiss/group/geography, https://opendata.swiss/group/construction
    :transportation: https://opendata.swiss/group/geography, https://opendata.swiss/group/mobility
    :utilitiesCommunication: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory, 
                             https://opendata.swiss/group/energy, https://opendata.swiss/group/culture
    :utilitiesCommunication_Energy: https://opendata.swiss/group/geography, https://opendata.swiss/group/energy,
                                    https://opendata.swiss/group/territory
    :utilitiesCommunication_Utilities: https://opendata.swiss/group/geography, https://opendata.swiss/group/territory
    :utilitiesCommunication_Communication: https://opendata.swiss/group/geography, https://opendata.swiss/group/culture
    :intelligenceMilitary: https://opendata.swiss/group/geography, https://opendata.swiss/group/public-order
    :farming: https://opendata.swiss/group/geography, https://opendata.swiss/group/agriculture
    :economy: https://opendata.swiss/group/geography, https://opendata.swiss/group/work,
              https://opendata.swiss/group/national-economy

.. code-block:: xml
    :caption: getting category with XPATH

    //gmd:identificationInfo//gmd:topicCategory/gmd:MD_TopicCategoryCode
