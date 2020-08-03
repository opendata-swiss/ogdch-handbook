.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Bibliothek <../bibliothek>` :fa:`chevron-right`
   - ISO-19139_che zu DCAT-AP-CH

***************************
ISO-19139_che zu DCAT-AP-CH
***************************

Transformation des Geodaten-Standards für opendata.swiss
========================================================

.. container:: Intro

    Um Geodaten auf opendata.swiss publizieren zu können, muss der Geodaten-Standard
    ISO-19139_che auf den von opendata.swiss genutzten DCAT-AP-CH abgebildet werden.
    Diese Dokumentation beschreibt die Standard-Transformation von ISO-19139_che
    nach :doc:`DCAT-AP-CH <dcat-ap-ch>`,
    so wie sie für das Harvesting von Geodaten auf opendata.swiss
    benötigt wird. Es geht dabei um die XML-Serialisierung durch XPath.
    Diese Dokumentation ist aktuell nur in Englisch verfügbar.

DCAT-AP-CH Standard Overview
----------------------------

- :ref:`Example Catalog <iso_19139_che-example>`
- :ref:`Dataset <iso_19139_che-dataset>`
- :ref:`Distribution <iso_19139_che-distribution>`

This documentation describes the mapping from ISO-19139_che to :doc:`DCAT-AP Switzerland <dcat-ap-ch>`.
ISO-19139_che is a standard used by `Geocat <https://www.geocat.ch>`__,
a data source from which opendata.swiss harvests datasets.

In this documentation we focus on the XML serialization of ISO-19139_che
and therefore describe the mapping in form of XPath (if not noted differently).

.. _iso_19139_che-example:

Example-Catalog
---------------

`Example XML serialization of an ISO-19139_che dataset <https://www.geocat.ch/geonetwork/srv/ger/xml.metadata.get?uuid=c5bc9d6b-cafb-4617-97d7-868ab4cd5506>`__

.. _iso_19139_che-dataset:

Dataset
-------

.. container:: instructions

    Please click on the text below for more details.

.. container:: attribute

    **dct:identifier**

    :Display name on opendata.swiss: Identifier
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:fileIdentifier/gco:CharacterString + '@' organization-slug (configuration for the harvester)

    :Format: the identifier should be of the form ``<id>@<organization-slug>``

    .. code-block:: xml
       :caption: dct:identifier
       :emphasize-lines: 2

       <gmd:fileIdentifier>
         <gco:CharacterString>93814e81-2466-4690-b54d-c1d958f1c3b8@geodat.ch</gco:CharacterString>
       </gmd:fileIdentifier>

.. container:: attribute

    **dct:title**

    :Display name on opendata.swiss: Pagetitle
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString

    .. code-block:: xml
       :caption: Example of getting dct:title: only 4 languages are taken: DE, EN, FR, IT
       :emphasize-lines: 6, 11, 16, 21

       <gmd:title xsi:type="gmd:PT_FreeText_PropertyType">
         <gco:CharacterString>Lärmbelastung durch Eisenbahnverkehr (Lr_Nacht)</gco:CharacterString>
         <gmd:PT_FreeText>
           <gmd:textGroup>
             <gmd:LocalisedCharacterString locale="#FR">
               Exposition au bruit du trafic ferroviaire (Lr_nuit)
             </gmd:LocalisedCharacterString>
           </gmd:textGroup>
           <gmd:textGroup>
             <gmd:LocalisedCharacterString locale="#DE">
               Lärmbelastung durch Eisenbahnverkehr (Lr_Nacht)
             </gmd:LocalisedCharacterString>
           </gmd:textGroup>
           <gmd:textGroup>
             <gmd:LocalisedCharacterString locale="#EN">
               Nighttime railway noise exposure
             </gmd:LocalisedCharacterString>
           </gmd:textGroup>
           <gmd:textGroup>
             <gmd:LocalisedCharacterString locale="#IT">
               Esposizione al rumore del traffico ferroviario (Lr_notte)
             </gmd:LocalisedCharacterString>
           </gmd:textGroup>
           <gmd:textGroup>
             <gmd:LocalisedCharacterString locale="#RM">
               Grevezza da canera tras il traffic da viafier durant la notg
             </gmd:LocalisedCharacterString>
           </gmd:textGroup>
         </gmd:PT_FreeText>
       </gmd:title>

.. container:: attribute

    **dct:description**

    :Display name on opendata.swiss: Description
    :ISO-19139_che XPath:

    .. code:: xml

        //gmd:identificationInfo//gmd:abstract//gmd:textGroup/gmd:LocalisedCharacterString

    .. code-block:: xml
       :caption: Example of getting dct:description: only 4 languages are taken: DE, EN, FR, IT
       :emphasize-lines: 5, 8, 11, 14

       <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">
          <gco:CharacterString>swissTLM3D Wanderwege enthält die signalisierten Wanderrouten der Schweiz und des Fürstentums Liechtenstein. Der Datensatz wird in Zusammenarbeit mit dem Bundesamt für Strassen ASTRA, SchweizMobil, Schweizer Wanderwege und den Kantonen publiziert. swissTLM3D Wanderwege bildet einen Teil des Datensatzes swissTLM3D.</gco:CharacterString>
          <gmd:PT_FreeText>
             <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#FR">swissTLM3D chemins de randonnée pédestre comprend les chemins de randonnée officiels de la Suisse et de la Principauté de Liechtenstein. Le jeu de données est publié en collaboration avec l'Office fédéral des routes OFROU, SuisseMobile, Suisse Rando et les cantons. swissTLM3D chemins de randonnée pédestre fait partie du jeu de données swissTLM3D.</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DE">swissTLM3D Wanderwege enthält die signalisierten Wanderrouten der Schweiz und des Fürstentums Liechtenstein. Der Datensatz wird in Zusammenarbeit mit dem Bundesamt für Strassen ASTRA, SchweizMobil, Schweizer Wanderwege und den Kantonen publiziert. swissTLM3D Wanderwege bildet einen Teil des Datensatzes swissTLM3D.</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#EN">swissTLM3D hiking trails contains the hiking trails of Switzerland and the Principality of Liechtenstein. This dataset is published in collaboration with the Federal roads office FEDRO, SwitzerlandMobility, Suisse Rando and the cantons. swissTLM3D hiking trails forms a part of the dataset swissTLM3D.</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#IT">swissTLM3D sentieri pedestri comprende i sentieri pedestri ufficiali della Svizzera e del Principato del Liechtenstein. Il set di dati viene pubblicato in collaborazione con l'Ufficio federale delle strade USTRA, SvizzeraMobile, Sentieri Svizzeri e i cantoni. swissTLM3D sentieri pedestri fa parte del set di dati swissTLM3D.</gmd:LocalisedCharacterString>
             </gmd:textGroup>
             <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#RM">swissTLM3D Sendas da viandar cuntegna las sendas da viandar uffizialas da la Svizra e dal Principadi da Liechtenstein. L'unitad da datas vegn publitgada en collavuraziun cun l'Uffizi federal da vias UVias, cun SvizraMobila, cun Sendas svizras e cun ils chantuns. swissTLM3D Sendas da viandar è ina part da l'unitad da datas swissTLM3D.</gmd:LocalisedCharacterString>
             </gmd:textGroup>
          </gmd:PT_FreeText>
       </gmd:abstract>

.. container:: attribute

    dct:issued

    :Display name on opendata.swiss: Issued date
    :ISO-19139_che XPath:

    .. code-block:: xml
        :caption: The first found date is taken in the order defined below:

        //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "publication"]//gco:Date or gco:DateTime
        //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "creation"]//gco:Date or gco:DateTime
        //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime

    .. code-block:: xml
        :caption: Example: codeListValue="publication" was found, 2012-05-11 is taken
        :emphasize-lines: 4, 7

        <gmd:date>
           <gmd:CI_Date>
              <gmd:date>
                 <gco:Date>2012-05-11</gco:Date>
              </gmd:date>
              <gmd:dateType>
                 <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication"/>
              </gmd:dateType>
           </gmd:CI_Date>
        </gmd:date>

.. container:: attribute

    dct:modified

    :Display name on opendata.swiss: Modified date
    :ISO-19139_che XPath:

    .. code:: xml

        //gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime

    .. code-block:: xml
        :caption: Example of getting dct:modified: codeListValue="revision" was found, 2020-02-23 is taken

        <gmd:identificationInfo>
           ...
           <gmd:citation>
              ...
                  <gmd:CI_Date>
                     <gmd:date>
                        <gco:Date>2020-02-23</gco:Date>
                     </gmd:date>
                     <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode"
                                             codeListValue="revision"/>
                     </gmd:dateType>
                  </gmd:CI_Date>
              ...
           </gmd:citation>
          ...
        <gmd:identificationInfo>


.. container:: attribute

    **dct:publisher**

    :Display name on opendata.swiss: Publishers
    :ISO-19139_che XPath:

    .. code-block:: xml
        :caption: The first one is taken in the following order:

        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:organisationName/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:organisationName/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:organisationName/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:organisationName/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:organisationName/gco:CharacterString
        //gmd:contact//che:CHE_CI_ResponsibleParty//gmd:organisationName/gco:CharacterString

    .. code-block:: xml
       :caption: Example of getting dct:publisher: codeListValue="pointOfContact" is detected,

        <gmd:pointOfContact xlink:show="embed">
           <che:CHE_CI_ResponsibleParty xmlns:geonet="http://www.fao.org/geonetwork" gco:isoType="gmd:CI_ResponsibleParty">
              <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:organisationName>
              <gmd:positionName xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:positionName>
              <gmd:contactInfo>
                 <gmd:CI_Contact>
                    <gmd:phone>...</gmd:phone>
                    <gmd:address>...</gmd:address>
                    <gmd:onlineResource>...</gmd:onlineResource>
                 </gmd:CI_Contact>
              </gmd:contactInfo>
              <gmd:role>
                 <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_RoleCode" codeListValue="pointOfContact"/>
              </gmd:role>
              <che:individualLastName>...</che:individualLastName>
              <che:organisationAcronym xsi:type="gmd:PT_FreeText_PropertyType">...</che:organisationAcronym>
           </che:CHE_CI_ResponsibleParty>
        </gmd:pointOfContact>

.. container:: attribute

    **dcat:contactPoint**

    :Display name on opendata.swiss: Contact points
    :ISO-19139_che XPath:

    .. code-block:: xml
        :caption: The first one is taken in the following order:

        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
        //gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
        //gmd:contact//che:CHE_CI_ResponsibleParty//gmd:address//gmd:electronicMailAddress/gco:CharacterString

    .. code-block:: xml
       :caption: Example of getting dcat:contactPoint: codeListValue="pointOfContact" was found
       :emphasize-lines: 8,10,16

       <gmd:pointOfContact xlink:show="embed">
          <che:CHE_CI_ResponsibleParty xmlns:geonet="http://www.fao.org/geonetwork" gco:isoType="gmd:CI_ResponsibleParty">
            <gmd:organisationName xsi:type="gmd:PT_FreeText_PropertyType">
              <gco:CharacterString>Bundesamt für Umwelt</gco:CharacterString>
              <gmd:PT_FreeText>...</gmd:PT_FreeText>
            </gmd:organisationName>
            <gmd:positionName xsi:type="gmd:PT_FreeText_PropertyType">
              <gco:CharacterString>Abteilung Lärm und NIS</gco:CharacterString>
              <gmd:PT_FreeText>...</gmd:PT_FreeText>
            </gmd:positionName>
            <gmd:contactInfo>
              <gmd:CI_Contact>...</gmd:CI_Contact>
            </gmd:contactInfo>
            <gmd:role>
              <gmd:CI_RoleCode codeList="http://www.isotc211.org/2005/resources/codeList.xml#CI_RoleCode" codeListValue="pointOfContact"/>
            </gmd:role>
            <che:individualLastName>
              <gco:CharacterString>BAFU noise</gco:CharacterString>
            </che:individualLastName>
            <che:organisationAcronym xsi:type="gmd:PT_FreeText_PropertyType">
              <gco:CharacterString>BAFU</gco:CharacterString>
              <gmd:PT_FreeText>...</gmd:PT_FreeText>
            </che:organisationAcronym>
          </che:CHE_CI_ResponsibleParty>
       </gmd:pointOfContact>

.. container:: attribute

    **dcat:theme**

    :Display name on opendata.swiss: Categories
    :ISO-19139_che XPath:

    .. code:: xml

        //gmd:identificationInfo//gmd:topicCategory/gmd:MD_TopicCategoryCode

    :Description:
                - `imageryBaseMapsEarthCover` => [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `imageryBaseMapsEarthCover_BaseMaps` => [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `imageryBaseMapsEarthCover_EarthCover`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `imageryBaseMapsEarthCover_Imagery`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `location`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `elevation`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `boundaries`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `planningCadastre`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `planningCadastre_Planning`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `planningCadastre_Cadastre`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `geoscientificInformation`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `geoscientificInformation_Geology`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `geoscientificInformation_Soils`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `geoscientificInformation_NaturalHazards`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `biota`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory, https://opendata.swiss/group/agriculture]
                - `oceans`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `inlandWaters`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `climatologyMeteorologyAtmosphere`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `environment`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `environment_EnvironmentalProtection`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `environment_NatureProtection`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `society`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/culture, https://opendata.swiss/group/population]
                - `health`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/health]
                - `structure`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/construction]
                - `transportation`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/mobility]
                - `utilitiesCommunication`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory, https://opendata.swiss/group/energy, https://opendata.swiss/group/culture]
                - `utilitiesCommunication_Energy`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/energy, https://opendata.swiss/group/territory]
                - `utilitiesCommunication_Utilities`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/territory]
                - `utilitiesCommunication_Communication`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/culture]
                - `intelligenceMilitary`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/public-order]
                - `farming`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/agriculture]
                - `economy`: [https://opendata.swiss/group/geography, https://opendata.swiss/group/work, https://opendata.swiss/group/national-economy]

    .. code-block:: xml
       :caption: Example of getting dcat:theme from gmd with ISO-19139_che XPath
       :emphasize-lines: 2

       <gmd:topicCategory>
         <gmd:MD_TopicCategoryCode>environment</gmd:MD_TopicCategoryCode>
       </gmd:topicCategory>

.. container:: attribute

    dct:language

    :Display name on opendata.swiss: Languages
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:identificationInfo//gmd:language/gmd:LanguageCode

    .. code-block:: xml
       :caption: Example of getting dct:description from gmd with ISO-19139_che XPath 

       <gmd:language>
          <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="ger"/>
       </gmd:language>

.. container:: attribute

    **dcat:distribution**

    :Description: See `distributions documentation below <#distributions>`__
    :Display name on opendata.swiss: Resources
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString/text() =
       - "WWW:DOWNLOAD-1.0-http–download"
       - "OGC:WMTS-http-get-capabilities"
       - "OGC:WMS-http-get-map"
       - "OGDC:WMS-http-get-capabilities"
       - "OGC:WFS-http-get-capabilities"
       - "WWW:DOWNLOAD-URL"]
       //gmd:identificationInfo//srv:containsOperations/srv:SV_OperationMetadata[.//srv:operationName//gco:CharacterString/text()]

    .. code-block:: xml
       :caption: Example of getting dcat:distribution from gmd with ISO-19139_che XPath

       <gmd:distributionInfo>
         <gmd:MD_Distribution>
           <gmd:distributionFormat xlink:show="embed">...</gmd:distributionFormat>
           <gmd:transferOptions>
             <gmd:MD_DigitalTransferOptions>
               <gmd:onLine>
                 <gmd:CI_OnlineResource>
                   <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">...</gmd:linkage>
                   <gmd:protocol>
                     <gco:CharacterString>WWW:LINK-1.0-http--link</gco:CharacterString>
                   </gmd:protocol>
                   <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
                   <gmd:function>...</gmd:function>
                 </gmd:CI_OnlineResource>
               </gmd:onLine>
             </gmd:MD_DigitalTransferOptions>
           </gmd:transferOptions>
         </gmd:MD_Distribution>
       </gmd:distributionInfo>

.. container:: attribute

    dct:relation

    :Display name on opendata.swiss: Resources
    :Description: See :ref:`distributions documentation below <iso_19139_che-distribution>`
    :ISO-19139_che XPath:

    .. code-block:: xml
       :caption: Every first link of the online resources gets put as landingPage, every additional link gets put into the relations.

       (//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
       [.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http--link"]
       //che:LocalisedURL)[position()>1]

    .. code-block:: xml
       :caption: Example of getting dct:relation from gmd with ISO-19139_che XPath

       <gmd:distributionInfo>
          <gmd:MD_Distribution>
            <gmd:distributionFormat xlink:show="embed">...</gmd:distributionFormat>
            <gmd:transferOptions>
              <gmd:MD_DigitalTransferOptions>
                <gmd:onLine>
                  <gmd:CI_OnlineResource>
                    <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">...</gmd:linkage>
                    <gmd:protocol>
                      <gco:CharacterString>WWW:LINK-1.0-http--link</gco:CharacterString>
                    </gmd:protocol>
                    <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
                    <gmd:function>...</gmd:function>
                  </gmd:CI_OnlineResource>
                </gmd:onLine>
              </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
          </gmd:MD_Distribution>
       </gmd:distributionInfo>

.. container:: attribute

    dcat:keyword

    :Display name on opendata.swiss: Keywords of the dataset
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:identificationInfo//gmd:descriptiveKeywords//gmd:keyword//gmd:textGroup//gmd:LocalisedCharacterString

    .. code-block:: xml
       :caption: Example of getting dcat:keyword from gmd with ISO-19139_che XPath

       <gmd:identificationInfo>
          <che:CHE_MD_DataIdentification gco:isoType="gmd:MD_DataIdentification">
              <gmd:citation>...</gmd:citation>
              <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:abstract>
              <gmd:purpose xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:purpose>
              <gmd:status>...</gmd:status>
              <gmd:pointOfContact xlink:show="embed">...</gmd:pointOfContact>
              <gmd:resourceMaintenance>...</gmd:resourceMaintenance>
              <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                  <gmd:keyword xsi:type="gmd:PT_FreeText_PropertyType">
                    <gmd:PT_FreeText>
                      <gmd:textGroup>
                        <gmd:LocalisedCharacterString locale="#DE">e-geo.ch Geoportal</gmd:LocalisedCharacterString>
                      </gmd:textGroup>
                    </gmd:PT_FreeText>
                  </gmd:keyword>
                  <gmd:type>...</gmd:type>
                  <gmd:thesaurusName>...</gmd:thesaurusName>
                </gmd:MD_Keywords>
              </gmd:descriptiveKeywords>
            <gmd:spatialRepresentationType>...</gmd:spatialRepresentationType>
            <gmd:language>...</gmd:language>
            <gmd:characterSet>...</gmd:characterSet>
            <gmd:topicCategory>...</gmd:topicCategory>
            <gmd:extent xlink:show="embed">...</gmd:extent>
            <che:basicGeodataID>...</che:basicGeodataID>
            <che:basicGeodataIDType>...</che:basicGeodataIDType>
          </che:CHE_MD_DataIdentification>
       </gmd:identificationInfo>

.. container:: attribute

    dcat:landingPage

    :Display name on opendata.swiss: Landing page
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
       [.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http--link"]//che:LocalisedURL

    .. code-block:: xml
       :caption: Example of getting dcat:landingPage from gmd with ISO-19139_che XPath

       <gmd:distributionInfo>
          <gmd:MD_Distribution>
            <gmd:distributionFormat xlink:show="embed">...</gmd:distributionFormat>
            <gmd:transferOptions>
              <gmd:MD_DigitalTransferOptions>
                <gmd:onLine>
                  <gmd:CI_OnlineResource>
                    <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">...</gmd:linkage>
                    <gmd:protocol>
                      <gco:CharacterString>WWW:LINK-1.0-http--link</gco:CharacterString>
                    </gmd:protocol>
                    <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
                    <gmd:function>...</gmd:function>
                  </gmd:CI_OnlineResource>
                </gmd:onLine>
              </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
          </gmd:MD_Distribution>
       </gmd:distributionInfo>

.. container:: attribute

    dct:spatial

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dct:coverage

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dct:temporal

    :Display name on opendata.swiss: Temporal Coverage
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:beginPosition
       //gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:endPosition

    .. code-block:: xml
       :caption: Example of getting dct:temporal from gmd with ISO-19139_che XPath

       <gmd:distributionFormat xlink:show="embed">
          <gmd:MD_Format>
            <gmd:name>
              <gco:CharacterString>GeoTIFF</gco:CharacterString>
            </gmd:name>
            <gmd:version>...</gmd:version>
          </gmd:MD_Format>
       </gmd:distributionFormat>

.. container:: attribute

    dct:accrualPeriodicity

    :Display name on opendata.swiss: Update interval
    :Description:
        - continual => \http://purl.org/cld/freq/continuous
        - daily => \http://purl.org/cld/freq/daily
        - weekly => \http://purl.org/cld/freq/weekly
        - fortnightly => \http://purl.org/cld/freq/biweekly
        - monthly => \http://purl.org/cld/freq/monthly
        - quarterly => \http://purl.org/cld/freq/quarterly
        - biannually => \http://purl.org/cld/freq/semiannual
        - annually => \http://purl.org/cld/freq/annual
        - asNeeded => \http://purl.org/cld/freq/completelyIrregular
        - irregular => \http://purl.org/cld/freq/completelyIrregular
        - notPlanned => \http://purl.org/cld/freq/completelyIrregular
        - unknown => \http://purl.org/cld/freq/completelyIrregular
    :ISO-19139_che XPath:

    .. code:: xml

        //gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue

    .. code-block:: xml
       :caption: Example of getting dct:accrualPeriodicity from gmd with ISO-19139_che XPath

       <gmd:identificationInfo>
          <che:CHE_MD_DataIdentification gco:isoType="gmd:MD_DataIdentification">
            <gmd:citation>...</gmd:citation>
            <gmd:abstract xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:abstract>
            <gmd:purpose xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:purpose>
            <gmd:status>...</gmd:status>
            <gmd:pointOfContact xlink:show="embed">...</gmd:pointOfContact>
            <gmd:resourceMaintenance>
              <che:CHE_MD_MaintenanceInformation gco:isoType="gmd:MD_MaintenanceInformation">
                <gmd:maintenanceAndUpdateFrequency>
                  <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="userDefined"/>
                </gmd:maintenanceAndUpdateFrequency>
                <gmd:userDefinedMaintenanceFrequency>...</gmd:userDefinedMaintenanceFrequency>
                <che:appraisal>...</che:appraisal>
              </che:CHE_MD_MaintenanceInformation>
            </gmd:resourceMaintenance>
            <gmd:descriptiveKeywords>...</gmd:descriptiveKeywords>
            <gmd:spatialRepresentationType>...</gmd:spatialRepresentationType>
            <gmd:language>...</gmd:language>
            <gmd:characterSet>...</gmd:characterSet>
            <gmd:topicCategory>...</gmd:topicCategory>
            <gmd:extent xlink:show="embed">...</gmd:extent>
            <che:basicGeodataID>...</che:basicGeodataID>
            <che:basicGeodataIDType>...</che:basicGeodataIDType>
          </che:CHE_MD_DataIdentification>
       </gmd:identificationInfo>

.. container:: attribute

    rdfs:seeAlso

    :Display name on opendata.swiss: Further Information
    :ISO-19139_che XPath:

    .. code:: xml

       //gmd:identificationInfo//gmd:aggregationInfo//gmd:aggregateDataSetIdentifier/gmd:MD_Identifier/gmd:code/gco:CharacterString

.. _iso_19139_che-distribution:

Distribution
------------

.. container:: attribute

    dct:title

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

    .. code:: xml

       For geodata: derived from protocol(//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString) and name (.//gmd:distributionInfo//gmd:transferOptions/gmd:name)
       In geoservices: .//srv:operationName/gco:CharacterString

    .. code-block:: xml
       :caption: Example of getting dct:title from gmd with ISO-19139_che XPath

       <gmd:transferOptions>
          <gmd:MD_DigitalTransferOptions>
            <gmd:onLine>
              <gmd:CI_OnlineResource>
                <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">...</gmd:linkage>
                <gmd:protocol>
                  <gco:CharacterString>WWW:LINK-1.0-http--link</gco:CharacterString>
                </gmd:protocol>
                <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
                <gmd:function>...</gmd:function>
              </gmd:CI_OnlineResource>
              </gmd:onLine>
          </gmd:MD_DigitalTransferOptions>
       </gmd:transferOptions>

.. container:: attribute

    dct:description

    :Display name on opendata.swiss: Description
    :ISO-19139_che XPath:
       In geoservices: Description of dataset

    .. code:: xml

       .//gmd:transferOptions//gmd:CI_OnlineResource//gmd:description//gmd:LocalisedCharacterString

    .. code-block:: xml
       :caption: Example of getting dct:description from gmd with ISO-19139_che XPath

       <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
          <gco:CharacterString>Download Server von geo.admin.ch</gco:CharacterString>
          <gmd:PT_FreeText>
            <gmd:textGroup>
              <gmd:LocalisedCharacterString locale="#DE">Download Server von geo.admin.ch</gmd:LocalisedCharacterString>
            </gmd:textGroup>
            <gmd:textGroup>
              <gmd:LocalisedCharacterString locale="#FR">Serveur de téléchargement de geo.admin.ch</gmd:LocalisedCharacterString>
            </gmd:textGroup>
            <gmd:textGroup>
              <gmd:LocalisedCharacterString locale="#EN">Download server from geo.admin.ch</gmd:LocalisedCharacterString>
            </gmd:textGroup>
            <gmd:textGroup>
              <gmd:LocalisedCharacterString locale="#IT">Server di download di geo.admin.ch</gmd:LocalisedCharacterString>
            </gmd:textGroup>
          </gmd:PT_FreeText>
       </gmd:description>

.. container:: attribute

    dct:language

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:
        Locales from

    .. code:: xml

       .//gmd:transferOptions//gmd:CI_OnlineResource//che:LocalisedURL

    .. code-block:: xml
       :caption: Example of getting dct:language from gmd with ISO-19139_che XPath

       <gmd:CI_OnlineResource>
          <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
          <gmd:URL>...</gmd:URL>
          <che:PT_FreeURL>
            <che:URLGroup>
              <che:LocalisedURL locale="#EN">
                https://www.bafu.admin.ch/bafu/en/home/office/divisions-sections/noise-and-nir-division.html
              </che:LocalisedURL>
              </che:URLGroup>
          </che:PT_FreeURL>
          </gmd:linkage>
          <gmd:protocol>...</gmd:protocol>
       </gmd:CI_OnlineResource>

.. container:: attribute

    **dct:issued**

    :Display name on opendata.swiss: Issued Date
    :ISO-19139_che XPath:
        issued from dataset


.. container:: attribute

    dct:modified

    :Display name on opendata.swiss: Modified Date
    :ISO-19139_che XPath:
        modified from dataset

.. container:: attribute

    **dcat:accessURL**

    :Display name on opendata.swiss: Access URL
    :ISO-19139_che XPath:

    .. code:: xml

       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMTS-http-get-capabilities"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMS-http-get-map"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WMS-http-get-capabilities"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "OGC:WFS-http-get-capabilities"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "CHTOPO:specialised-geoportal"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:LINK-1.0-http–link"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:DOWNLOAD-1.0-http--download"]//che:LocalisedURL
       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text() = "WWW:DOWNLOAD-URL"]//che:LocalisedURL
       .//srv:connectPoint//gmd:linkage//che:LocalisedURL

    .. code-block:: xml
       :caption: Example of getting dcat:accessURL from gmd with ISO-19139_che XPath

       <gmd:CI_OnlineResource>
          <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
          <gmd:URL>...</gmd:URL>
          <che:PT_FreeURL>
            <che:URLGroup>
              <che:LocalisedURL locale="#EN">
                https://www.bafu.admin.ch/bafu/en/home/office/divisions-sections/noise-and-nir-division.html
              </che:LocalisedURL>
              </che:URLGroup>
          </che:PT_FreeURL>
          </gmd:linkage>
          <gmd:protocol>...</gmd:protocol>
       </gmd:CI_OnlineResource>

.. container:: attribute

    **dct:rights**

    :Display name on opendata.swiss: Terms of use
    :Description:
                  - **NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired**: Freie Nutzung / Utilisation libre
                  - **NonCommercialAllowed-CommercialAllowed-ReferenceRequired**: Freie Nutzung. Quellenangabe ist Pflicht. Utilisation libre. Obligation d’indiquer la source.
                  - **NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired**: Freie Nutzung. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig. / Utilisation libre. Utilisation à des fins commerciales uniquement avec l’autorisation du fournisseur des données.
                  - **NonCommercialAllowed-CommercialWithPermission-ReferenceRequired**: Freie Nutzung. Quellenangabe ist Pflicht. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig. / Utilisation libre. Obligation d’indiquer la source. Utilisation commerciale uniquement avec l’autorisation du fournisseur des données.
    :ISO-19139_che XPath:
       The first one in the following order:

    .. code:: xml

       //gmd:resourceConstraints//gmd:otherConstraints//gmd:LocalicedCharacterString
       //gmd:linkage//che:LocalisedURL

    .. code-block:: xml
       :caption: Example of getting dct:rights from gmd with ISO-19139_che XPath

       <gmd:otherConstraints xsi:type="gmd:PT_FreeText_PropertyType">
            <gco:CharacterString>Freie Nutzung</gco:CharacterString>
            <gmd:PT_FreeText>
              <gmd:textGroup>
                <gmd:LocalisedCharacterString locale="#DE">Freie Nutzung</gmd:LocalisedCharacterString>
              </gmd:textGroup>
            </gmd:PT_FreeText>
       </gmd:otherConstraints>

.. container:: attribute

    dct:license

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dct:identifier

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dcat:downloadURL

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

    .. code:: xml

       .//gmd:transferOptions//gmd:CI_OnlineResource[.//gmd:protocol/gco:CharacterString/text()
       [contains(.,"WWW:DOWNLOAD")]]//che:LocalisedURL

    .. code-block:: xml
       :caption: Example of getting dcat:downloadURL from gmd with ISO-19139_che XPath

       <gmd:CI_OnlineResource>
          <gmd:linkage xsi:type="che:PT_FreeURL_PropertyType">
            <che:PT_FreeURL>
              <che:URLGroup>
                <che:LocalisedURL locale="#DE">http://data.geo.admin.ch/ch.blw.klimaeignung-kulturland/data.zip</che:LocalisedURL>
              </che:URLGroup>
            </che:PT_FreeURL>
          </gmd:linkage>
          <gmd:protocol>
            <gco:CharacterString>WWW:DOWNLOAD-URL</gco:CharacterString>
          </gmd:protocol>
          <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">...</gmd:description>
          <gmd:function>...</gmd:function>
       </gmd:CI_OnlineResource>

.. container:: attribute

    dcat:byteSize

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dcat:mediaType

    :Display name on opendata.swiss: Keywords of the dataset
    :ISO-19139_che XPath:

    .. code:: xml

       .//gmd:distributionInfo//gmd:distributionFormat//gmd:name/gco:CharacterString
       //gmd:identificationInfo//srv:serviceType/gco:LocalName

    .. code-block:: xml
       :caption: Example of getting dcat:mediaType from gmd with ISO-19139_che XPath

       <gmd:distributionFormat xlink:show="embed">
          <gmd:MD_Format>
            <gmd:name>
              <gco:CharacterString>GeoTIFF</gco:CharacterString>
            </gmd:name>
            <gmd:version>...</gmd:version>
          </gmd:MD_Format>
       </gmd:distributionFormat>

.. container:: attribute

    dct:format

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:

.. container:: attribute

    dct:coverage

    :Display name on opendata.swiss: Currently not implemented
    :ISO-19139_che XPath:
