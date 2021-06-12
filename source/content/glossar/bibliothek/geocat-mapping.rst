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
- :ref:`Overview <iso_19139_che-overview>`
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

.. _iso_19139_che-overview:

Overview
-----------

Geocat Distributions ``//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource``
are mapped either to the :ref:`dcat:Dataset <iso_19139_che-dataset-mapping>`
class or to the :ref:`dcat:Distribution <iso_19139_che-distribution-mapping>` class, depending on ``.//gmd:protocol``

The "Mapped from" column in the table gives just a hint, on where the metadata is comming from. Please see
for the Field descriptions for the actual mapping.

.. _iso_19139_che-dataset-mapping:

Mapping to dcat:Dataset
^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: Mappings to dcat:Dataset
    :widths: 20 30 50
    :header-rows: 1
    :stub-columns: 1

    * - DCAT property
      - Mapped from
      - Usgae Notes
    * - :ref:`dct:title <dcat-dataset-title>`
      - :ref:`//gmd:identificationInfo//gmd:citation//gmd:title <geocat-dataset-title>`
      - 1*
    * - :ref:`dct:description <dcat-dataset-description>`
      - :ref:`//gmd:identificationInfo//gmd:abstract <geocat-dataset-description>`
      - 1*
    * - :ref:`dct:publisher <geocat-dataset-publisher>`
      - :ref:`//gmd:identificationInfo//gmd:pointOfContact <geocat-dataset-publisher>`
      - 1
    * - :ref:`dcat:contactPoint <dcat-dataset-contact-point>`
      - :ref:`//gmd:identificationInfo//gmd:pointOfContact or //gmd:contact <geocat-dataset-contact-point>`
      - 1, could be N
    * - :ref:`dct:identifier <dcat-dataset-identifier>`
      - :ref:`//gmd:fileIdentifier <geocat-dataset-identifier>`
      - 1
    * - :ref:`dcat:Distribution <dcat-dataset-distribution>`
      - :ref:`//gmd:distributionInfo <geocat-dataset-distribution>`
      - N
    * - :ref:`dct:issued <dcat-dataset-issued>`
      - :ref:`//gmd:identificationInfo//gmd:citation//gmd:CI_Date <geocat-dataset-issued>`
      - 1
    * - :ref:`modified <dcat-dataset-modified>`
      - :ref:`//gmd:identificationInfo//gmd:citation//gmd:CI_Date <geocat-dataset-modified>`
      -
    * - :ref:`dcat:theme <dcat-dataset-theme>`
      - :ref:`//gmd:identificationInfo//gmd:topicCategory <geocat-dataset-theme>`
      -
    * - :ref:`dcat:landingPage <dcat-dataset-landing-page>`
      - :ref:`//gmd:distributionInfo <geocat-dataset-landing-page>`
      - depends on gmd:protocol
    * - :ref:`dct:relation <dcat-dataset-relation>`
      - :ref:`//gmd:distributionInfo <geocat-dataset-relation>`
      - depends on gmd:protocol
    * - :ref:`dct:language <dcat-dataset-language>`
      - :ref:`//gmd:identificationInfo//gmd:language <geocat-dataset-language>`
      -
    * - :ref:`dcat:keyword <dcat-dataset-keyword>`
      - :ref:`//gmd:identificationInfo//gmd:descriptiveKeywords <geocat-dataset-keyword>`
      -
    * - :ref:`dct:spatial <dcat-dataset-spatial>`
      - :ref:`//gmd:identificationInfo//gmd:extent <geocat-dataset-spatial>`
      -
    * - :ref:`dct:coverage <dcat-dataset-coverage>`
      -
      - mapping not implemented
    * - :ref:`dct:temporal <dcat-dataset-temporal>`
      - :ref:`//gmd:identificationInfo//gmd:extent//gmd:temporalElement <geocat-dataset-temporal>`
      -
    * - :ref:`accrual periodicty <dcat-dataset-accrual-periodicity>`
      - :ref:`//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation <geocat-dataset-accrual-periodicity>`
      -
    * - :ref:`see alsos <dcat-dataset-see-alsos>`
      - :ref:`//gmd:identificationInfo//gmd:aggregationInfo <geocat-dataset-see-alsos>`
      -

.. _iso_19139_che-distribution-mapping:

Mapping to dcat:Distribution
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: Mappings of //gmd:DistributionInfo to dcat:Distribution
    :widths: 20 30 50
    :header-rows: 1
    :stub-columns: 1

    * - DCAT property
      - Mapped from
      - Usgae Notes
    * - :ref:`dct:issued <dcat-distribution-issued>`
      - :ref:`//gmd:identificationInfo//gmd:citation//gmd:CI_Date <geocat-dataset-issued>`
      - taken from the Dataset
    * - :ref:`dcat:accessURL <dcat-distribution-access-url>`
      - :ref:`.//gmd:linkage <geocat-distribution-access-url>`
      -
    * - :ref:`dct:rights <dcat-distribution-rights>`
      - :ref:`//gmd:resourceConstraints <geocat-distribution-rights>`
      - derived for the dataset
    * - :ref:`dct:title <dcat-distribution-title>`
      - :ref:`.//gmd:name <geocat-distribution-title>`
      - in combination with protocol
    * - :ref:`dct:description <dcat-distribution-description>`
      - :ref:`.//gmd:description <geocat-distribution-description>`
      -
    * - :ref:`dcat:byteSize <geocat-distribution-byte-size>`
      -
      - mapping not implemented
    * - :ref:`media type <dcat-distribution-media-type>`
      - :ref:`.//gmd:protocol <geocat-distribution-media-type>`
      - derived from the protocol
    * - :ref:`dct:format <geocat-distribution-format>`
      -
      - mapping not implemented
    * - :ref:`dct:language <dcat-distribution-language>`
      - :ref:`.//gmd:linkage//che:LocalisedURL <geocat-distribution-language>`
      - depends on localized urls
    * - :ref:`dct:modified <dcat-distribution-modified>`
      - :ref:`//gmd:identificationInfo//gmd:citation//gmd:CI_Date <geocat-dataset-issued>`
      - taken from the Dataset
    * - :ref:`dct:license <geocat-distribution-license>`
      -
      - mapping not implemented
    * - :ref:`dct:identifier <geocat-distribution-identifier>`
      -
      - mapping not implemented
    * - :ref:`download url <dcat-distribution-download-url>`
      - :ref:`.//gmd:linkage <geocat-distribution-download-url>`
      - download protocols only
    * - :ref:`coverage <geocat-distribution-coverage>`
      -
      - mapping not implemented

.. _iso_19139_che-dataset:

Dataset
-------

.. _geocat-dataset-identifier:

//gmd:fileIdentifier to dct:identifier (geocat)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: geocat-mappings/dataset-identifier.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:identifier``

    .. include:: geocat-examples/dataset-identifier.rst

.. _geocat-dataset-title:

/gmd:identificationInfo//gmd:citation//gmd:title to dct:title
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-title.rst

.. toggle-header::
    :header: Example for geocat-mapping to ``dct:title``

    .. include:: geocat-examples/dataset-title.rst

.. _geocat-dataset-description:

/gmd:identificationInfo//gmd:abstract to dct:description
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-description.rst

.. toggle-header::
    :header: Example for geocat-mapping to ``dct:description``

    .. include:: geocat-examples/dataset-description.rst

.. _geocat-dataset-publisher:

gmd:pointOfContact or //gmd:contact to dct:publisher
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-publisher.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:publisher``

    .. include:: geocat-examples/dataset-publisher.rst

.. _geocat-dataset-contact-point:

gmd:pointOfContact or //gmd:contact  to dct:contactPoint
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-contact-point.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:contactPoint``

    .. include:: geocat-examples/dataset-contact-point.rst

.. _geocat-dataset-distribution:

//gmd:distributionInfo/gmd:MD_Distribution to dcat:distribution
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-distribution.rst

.. toggle-header::
    :header: Example of getting the protocols for ``dcat:distribution``

    .. include:: geocat-examples/dataset-distribution.rst

.. _geocat-dataset-issued:

//gmd:identificationInfo//gmd:citation//gmd:CI_Date to dct:issued
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-issued.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:issued``

    .. include:: geocat-examples/dataset-issued.rst

.. _geocat-dataset-modified:

//gmd:identificationInfo//gmd:citation//gmd:CI_Date to dct:modified
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-modified.rst


.. toggle-header::
    :header: Example for geocat mapping to ``dct:modified``

    .. include:: geocat-examples/dataset-modified.rst

.. _geocat-dataset-theme:

//gmd:identificationInfo//gmd:topicCategory/ to dcat:theme
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-theme.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:theme``

    .. include:: geocat-examples/dataset-theme.rst


.. _geocat-dataset-language:

//gmd:identificationInfo//gmd:language to dct:language
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-language.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:language``

    .. include:: geocat-examples/dataset-language.rst

.. _geocat-dataset-landing-page:

//gmd:distributionInfo/gmd:MD_Distribution to dct:landing-page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-landing-page.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:langingPage``

    .. include:: geocat-examples/dataset-landing-page.rst

.. _geocat-dataset-relation:

//gmd:distributionInfo/gmd:MD_Distribution to dct:relation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-relation.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:relation``

    .. include:: geocat-examples/dataset-relation.rst

.. _geocat-dataset-keyword:

//gmd:identificationInfo//gmd:descriptiveKeywords to dct:keyword
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-keyword.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:keyword``

    .. include:: geocat-examples/dataset-keyword.rst

.. _geocat-dataset-spatial:

//gmd:identificationInfo//gmd:extent//gmd:description to dct:spatial
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-spatial.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:spatial``

    .. include:: geocat-examples/dataset-spatial.rst

.. _geocat-dataset-temporal:

//gmd:identificationInfo//gmd:extent//gmd:temporalElement to dct:temporal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-temporal.rst

.. _geocat-dataset-accrual-periodicity:

//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation to dct:accrualPeriodicity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-accrual-periodicity.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:accrualPeriodicity``

    .. include:: geocat-examples/dataset-accrual-periodicity.rst

.. _geocat-dataset-see-alsos:

//gmd:identificationInfo//gmd:aggregationInfo to dct:seeAlsos
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-see-alsos.rst

.. toggle-header::
    :header: Defintition of ``dcat:seeAlsos`` in DCAT-AP-CH

    .. include:: geocat-examples/dataset-see-alsos.rst

.. _iso_19139_che-distribution:

Distribution
------------

.. _geocat-distribution-access-url:

Map to dcat:accessURL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-access-url.rst

.. toggle-header::
    :header: Example of a "LINKED:DATA" Distribution

    .. include:: geocat-examples/distribution-access-url.rst

.. _geocat-distribution-download-url:

Map to dcat:downloadURL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-download-url.rst

.. toggle-header::
    :header: Example of a "WWW:DOWNLOAD" Distribution

    .. include:: geocat-examples/distribution-download-url.rst

.. _geocat-distribution-rights:

Map to dct:rights
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-rights.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:rights``

    .. include:: geocat-examples/distribution-rights.rst

.. _geocat-distribution-media-type:

Map to dcat:mediaType
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-media-type.rst

.. toggle-header::
    :header: Example of a "WWW:DOWNLOAD" Distribution with ``dcat:mediaType`` "INTERLIS"

    .. include:: geocat-examples/distribution-media-type.rst

.. _geocat-distribution-title:

Map to dct:title
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-title.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:title``

    .. include:: geocat-examples/distribution-title.rst

.. _geocat-distribution-language:

Map to dct:language
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/distribution-language.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:language``

    .. include:: geocat-examples/distribution-language.rst

.. _geocat-distribution-identifier:
