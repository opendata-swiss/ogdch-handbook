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

.. list-table:: Properties of dcat:Dataset
    :widths: 20 20 30 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
      - geocat
    * - `dataset-identifier`_
      - dct:identifier
      - **mandatory**
      - ``gmd:identificationInfo``
    * - `dataset-title`_
      - dct:title
      - **mandatory**, multilingual
      - ``gmd:identificationInfo``
    * - `dataset-description`_
      - dct:description
      - **mandatory**, multilingual
      - ``gmd:identificationInfo``
    * - `dataset-publisher`_
      - dct:publisher
      - **mandatory**, **CHANGED rule**
      - ``gmd:identificationInfo``
    * - `dataset-contacts`_
      - dcat:contactPoints
      - **mandatory**
      - ``gmd:identificationInfo``
    * - `dataset-distributions`_
      - dcat:distribution
      - **mandatory**
      - needs work
    * - `dataset-issued`_
      - dct:issued
      - conditional
      - ``gmd:identificationInfo``
    * - `dataset-modified`_
      - dct:modified
      - conditional
      - ``gmd:identificationInfo``
    * - `dataset-categories`_
      - dcat:theme
      - conditional
      -
    * - `dataset-language`_
      - dct:language
      - conditional
      -
    * - `dataset-landing-page`_
      - dcat:landingPage
      - conditional
      -
    * - `dataset-further-information`_
      - dct:description
      - optional
      -
    * - `dataset-keywords`_
      - dct:keyword
      - optional
      -
    * - `dataset-spatial`_
      - dct:spatial
      - optional
      - not implemented
    * - `dataset-coverage`_
      - dct:coverage
      - optional
      - not implemented
    * - `dataset-temporal`_
      - dct:temporal
      - optional
      -
    * - `dataset-frequency`_
      - dct:accrualPeriodicity
      - optional
      -
    * - `related-datasets`_
      - rdfs:seeAlsos
      - optional
      -

.. list-table:: Properties of dcat:Distribution
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - attributes
    * - `distribution-class`_
      - dcat:Distribution
      - **mandatory**
    * - `distribution-access-url`_
      - dcat:accessURL
      - **mandatory**
    * - `distribution-download-url`_
      - dcat:downloadURL
      - optional
    * - `distribution-issued`_
      - dct:issued
      - **mandatory**
    * - `distribution-rights`_
      - dct:rights
      - **mandatory**
    * - `distribution-media-type`_
      - dct:mediaType
      - conditional
    * - `distribution-format`_
      - dct:format
      - conditional
    * - `distribution-size`_
      - dct:byteSize
      - conditional
    * - `distribution-modified`_
      - dct:modified
      - conditional
    * - `distribution-title`_
      - dct:title
      - conditional
    * - `distribution-description`_
      - dct:description
      - conditional
    * - `distribution-language`_
      - dct:language
      - conditional
    * - `distribution-identifier`_
      - dct:identifier
      - optional
    * - `distribution-license`_
      - dct:license
      - optional
    * - `distribution-coverage`_
      - dct:coverage
      - optional

.. _iso_19139_che-dataset:

Dataset
-------

:ref:`back to overview <iso_19139_che-overview>`

.. include:: dcat-definitions/dataset-identifier.rst
.. include:: geocat-mappings/dataset-identifier.rst
.. include:: geocat-examples/dataset-identifier.rst

.. include:: dcat-definitions/dataset-title.rst
.. include:: geocat-mappings/dataset-title.rst
.. include:: geocat-examples/dataset-title.rst

.. include:: dcat-definitions/dataset-description.rst
.. include:: geocat-mappings/dataset-description.rst
.. include:: geocat-examples/dataset-description.rst

.. include:: dcat-definitions/dataset-publisher.rst
.. include:: geocat-mappings/dataset-publisher.rst
.. include:: geocat-examples/dataset-publisher.rst

.. include:: dcat-definitions/dataset-contacts.rst
.. include:: geocat-mappings/dataset-contacts.rst
.. include:: geocat-examples/dataset-contacts.rst

.. include:: dcat-definitions/dataset-distributions.rst
.. include:: geocat-mappings/dataset-distributions.rst
.. include:: geocat-examples/dataset-distributions.rst

.. include:: dcat-definitions/dataset-issued.rst
.. include:: geocat-mappings/dataset-issued.rst
.. include:: geocat-examples/dataset-issued.rst

.. include:: dcat-definitions/dataset-modified.rst
.. include:: geocat-mappings/dataset-modified.rst
.. include:: geocat-examples/dataset-modified.rst

.. include:: dcat-definitions/dataset-categories.rst
.. include:: geocat-mappings/dataset-categories.rst
.. include:: geocat-examples/dataset-categories.rst

.. include:: dcat-definitions/dataset-language.rst
.. include:: geocat-mappings/dataset-language.rst
.. include:: geocat-examples/dataset-language.rst

.. include:: dcat-definitions/dataset-landing-page.rst
.. include:: geocat-mappings/dataset-landing-page.rst
.. include:: geocat-examples/dataset-landing-page.rst

.. include:: dcat-definitions/dataset-further-information.rst
.. include:: geocat-mappings/dataset-further-information.rst
.. include:: geocat-examples/dataset-further-information.rst

.. include:: dcat-definitions/dataset-keywords.rst
.. include:: geocat-mappings/dataset-keywords.rst
.. include:: geocat-examples/dataset-keywords.rst

.. include:: dcat-definitions/dataset-spatial.rst
.. include:: geocat-mappings/dataset-spatial.rst

.. include:: dcat-definitions/dataset-coverage.rst
.. include:: geocat-mappings/dataset-coverage.rst

.. include:: dcat-definitions/dataset-temporal.rst
.. include:: geocat-mappings/dataset-temporal.rst

.. include:: dcat-definitions/dataset-frequency.rst
.. include:: geocat-mappings/dataset-frequency.rst
.. include:: geocat-examples/dataset-frequency.rst

.. include:: dcat-definitions/related-datasets.rst
.. include:: geocat-mappings/related-datasets.rst

.. _iso_19139_che-distribution:

Distribution
------------

.. include:: dcat-definitions/distribution-class.rst
.. include:: geocat-mappings/distribution-class.rst

.. include:: dcat-definitions/distribution-access-url.rst
.. include:: geocat-mappings/distribution-access-url.rst
.. include:: geocat-examples/distribution-access-url.rst

.. include:: dcat-definitions/distribution-download-url.rst
.. include:: geocat-mappings/distribution-download-url.rst
.. include:: geocat-examples/distribution-download-url.rst

.. include:: dcat-definitions/distribution-issued.rst
.. include:: geocat-mappings/distribution-issued.rst
.. include:: geocat-examples/distribution-issued.rst

.. include:: dcat-definitions/distribution-rights.rst
.. include:: geocat-mappings/distribution-rights.rst
.. include:: geocat-examples/distribution-rights.rst

.. include:: dcat-definitions/distribution-media-type.rst
.. include:: geocat-mappings/distribution-media-type.rst
.. include:: geocat-examples/distribution-media-type.rst

.. include:: dcat-definitions/distribution-format.rst
.. include:: geocat-mappings/distribution-format.rst

.. include:: dcat-definitions/distribution-size.rst
.. include:: geocat-mappings/distribution-size.rst

.. include:: dcat-definitions/distribution-modified.rst
.. include:: geocat-mappings/distribution-modified.rst
.. include:: geocat-examples/distribution-modified.rst

.. include:: dcat-definitions/distribution-title.rst
.. include:: geocat-mappings/distribution-title.rst
.. include:: geocat-examples/distribution-title.rst

.. include:: dcat-definitions/distribution-description.rst
.. include:: geocat-mappings/distribution-description.rst
.. include:: geocat-examples/distribution-description.rst

.. include:: dcat-definitions/distribution-language.rst
.. include:: geocat-mappings/distribution-language.rst
.. include:: geocat-examples/distribution-language.rst

.. include:: dcat-definitions/distribution-identifier.rst
.. include:: geocat-mappings/distribution-identifier.rst

.. include:: dcat-definitions/distribution-license.rst
.. include:: geocat-mappings/distribution-license.rst

.. include:: dcat-definitions/distribution-coverage.rst
.. include:: geocat-mappings/distribution-coverage.rst
