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
      - mapped from
    * - :ref:`title <geocat-dataset-title>`
      - dct:title
      - **mandatory**, multilingual
      - gmd:identificationInfo
    * - :ref:`description <geocat-dataset-description>`
      - dct:description
      - **mandatory**, multilingual
      - gmd:identificationInfo
    * - :ref:`publisher <geocat-dataset-publisher>`
      - dct:publisher
      - **mandatory**, **CHANGED rule**
      -
    * - :ref:`contact point <geocat-dataset-contact-point>`
      - dcat:contactPoint
      - **mandatory**
      -
    * - :ref:`identifier <geocat-dataset-identifier>`
      - dct:identifier
      - **mandatory**
      -
    * - :ref:`distribution <geocat-dataset-distribution>`
      - dcat:distribution
      - **mandatory**
      -
    * - :ref:`issued <geocat-dataset-issued>`
      - dct:issued
      - conditional
      -
    * - :ref:`modified <geocat-dataset-modified>`
      - dct:modified
      - conditional
      -
    * - :ref:`theme <geocat-dataset-theme>`
      - dcat:theme
      - conditional
      -
    * - :ref:`landing page <dgeocat-dataset-landing-page>`
      - dcat:landingPage
      - conditional
      -
    * - :ref:`language <geocat-dataset-language>`
      - dct:language
      - conditional
      -
    * - :ref:`keyword <geocat-dataset-keyword>`
      - dcat:keyword
      - optional
      -
    * - :ref:`spatial <geocat-dataset-spatial>`
      - dct:spatial
      - optional
      -
    * - :ref:`coverage <geocat-dataset-coverage>`
      - dct:coverage
      - optional
      -
    * - :ref:`temporal <geocat-dataset-temporal>`
      - dct:temporal
      - optional
      -
    * - :ref:`accrual periodicty <geocat-dataset-accrual-periodicity>`
      - dct:accrualPeriodicity
      - optional
      -
    * - :ref:`coverage <geocat-dataset-relation>`
      - dct:relation
      - optional
      -
    * - :ref:`see alsos <geocat-dataset-see-alsos>`
      - rdfs:seeAlsos
      - optional
      -

.. list-table:: Properties of dcat:Distribution
    :widths: 20 20 30 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
      - mapped from
    * - :ref:`issued <geocat-distribution-issued>`
      - dct:issued
      - **mandatory**
      -
    * - :ref:`access url <geocat-distribution-access-url>`
      - dcat:accessURL
      - **mandatory**
      -
    * - :ref:`rights <dgeocat-distribution-rights>`
      - dct:rights
      - **mandatory**
      - does not conform to DCAT-AP-CH
    * - :ref:`title <geocat-distribution-title>`
      - dct:title
      - conditional
      -
    * - :ref:`description <geocat-distribution-description>`
      - dct:description
      - conditional
      -
    * - :ref:`byte size <geocat-distribution-byte-size>`
      - dct:byteSize
      - conditional
      -
    * - :ref:`media type <geocat-distribution-media-type>`
      - dct:mediaType
      - conditional
      -
    * - :ref:`format <geocat-distribution-format>`
      - dct:format
      - conditional
      -
    * - :ref:`language <geocat-distribution-language>`
      - dct:language
      - conditional
      -
    * - :ref:`modified <geocat-distribution-modified>`
      - dct:modified
      - conditional
      -
    * - :ref:`license <geocat-distribution-license>`
      - dcat:license
      - optional
      - does not conform to DCAT-AP
    * - :ref:`identifier <geocat-distribution-identifier>`
      - dct:identifier
      - optional
      -
    * - :ref:`download url <geocat-distribution-download-url>`
      - dcat:downloadURL
      - optional
      -
    * - :ref:`coverage <geocat-distribution-coverage>`
      - dct:coverage
      - optional
      -

.. _iso_19139_che-dataset:

Dataset
-------

.. _geocat-dataset-identifier:

dct:identifier (geocat)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: geocat-mappings/dataset-identifier.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:identifier``

    .. include:: geocat-examples/dataset-identifier.rst

.. toggle-header::
    :header: Defintition of ``dct:identifier`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-identifier.rst

.. _geocat-dataset-title

Map to dct:title
^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-title.rst

.. toggle-header::
    :header: Example for geocat-mapping to ``dct:title``

    .. include:: geocat-examples/dataset-title.rst

.. toggle-header::
    :header: Defintition of ``dct:title`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-title.rst

.. _geocat-dataset-description

Map to dct:description
^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-description.rst

.. toggle-header::
    :header: Example for geocat-mapping to ``dct:description``

    .. include:: geocat-examples/dataset-description.rst

.. toggle-header::
    :header: Defintition of ``dct:description`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-description.rst

.. _geocat-dataset-publisher:

Map to dct:publisher
^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-publisher.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:publisher``

    .. include:: geocat-examples/dataset-publisher.rst

.. toggle-header::
    :header: Defintition of ``dct:publisher`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-publisher.rst

.. _geocat-dataset-contacts:

Map to dct:contactPoint
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-contacts.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:contactPoint``

    .. include:: geocat-examples/dataset-contacts.rst

.. toggle-header::
    :header: Defintition of ``dcat:contactPoint`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-contacts.rst

.. _geocat-dataset-distributions:

Map to dcat:distributions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-distributions.rst

.. toggle-header::
    :header: Example for geocat-mapping to ``dcat:distribution``

    .. include:: geocat-examples/dataset-distributions.rst

.. toggle-header::
    :header: Defintition of ``dcat:distribution`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-distributions.rst

.. _geocat-dataset-issued:

Map to dct:issued
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-issued.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:issued``

    .. include:: geocat-examples/dataset-issued.rst

.. toggle-header::
    :header: Defintition of ``dct:issued`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-issued.rst

.. _geocat-dataset-modified

Map to dct:modified
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

		.. include:: geocat-mappings/dataset-modified.rst


.. toggle-header::
    :header: Example for geocat mapping to ``dct:modified``

		.. include:: geocat-examples/dataset-modified.rst

.. toggle-header::
    :header: Defintition of ``dct:modified`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-modified.rst

.. _geocat-dataset-categories

Map to dcat:theme
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-categories.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:theme``

    .. include:: geocat-examples/dataset-categories.rst

.. toggle-header::
    :header: Defintition of ``dcat:theme`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-categories.rst

.. _geocat-dataset-language

Map to dct:language
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-language.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:language``

    .. include:: geocat-examples/dataset-language.rst

.. toggle-header::
    :header: Defintition of ``dct:language`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-language.rst

.. _geocat-dataset-landing-page

Map to dct:landing-page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-landing-page.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:langingPage``

    .. include:: geocat-examples/dataset-landing-page.rst

.. toggle-header::
    :header: Defintition of ``dcat:landingPage`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-landing-page.rst

.. _geocat-dataset-further-information

Map to dct:relation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-further-information.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:relation``

    .. include:: geocat-examples/dataset-further-information.rst

.. toggle-header::
    :header: Defintition of ``dct:relation`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-further-information.rst

. _geocat-dataset-keyword

Map to dct:keyword
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-keywords.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dcat:keyword``

    .. include:: geocat-examples/dataset-keywords.rst

.. toggle-header::
    :header: Defintition of ``dct:keyword`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-keywords.rst

.. _geocat-dataset-spatial

Map to dct:spatial
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-spatial.rst

.. include:: geocat-examples/dataset-spatial.rst

.. toggle-header::
    :header: Defintition of ``dct:spatial`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-spatial.rst

.. _geocat-dataset-coverage

Map to to dct:coverage
^^^^^^^^^^^^^^^^^^^^^^^^

Mappimg not implemented

.. include:: dcat-definitions/dataset-coverage.rst

.. _geocat-dataset-temporal

Map to dct:temporal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-temporal.rst

.. include:: geocat-examples/dataset-temporal.rst

.. toggle-header::
    :header: Defintition of ``dct:temporal`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-temporal.rst

.. _geocat-dataset-frequency

Map to dct:accrualPeriodicity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/dataset-frequency.rst

.. toggle-header::
    :header: Example for geocat mapping to ``dct:accrualPeriodicity``

    .. include:: geocat-examples/dataset-frequency.rst

.. toggle-header::
    :header: Defintition of ``dct:spatial`` in DCAT-AP-CH

    .. include:: dcat-definitions/dataset-frequency.rst

.. _geocat-dataset-related-datasets

Map to dct:seeAlsos
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: geocat-mappings/related-datasets.rst

.. include:: geocat-examples/related-datasets.rst

.. toggle-header::
    :header: Defintition of ``dcat:seeAlsos`` in DCAT-AP-CH

    .. include:: dcat-definitions/related-datasets.rst

.. _iso_19139_che-distribution:

Distribution
------------

.. _geocat-distributtion-access-url

Map to dcat:accessURL
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

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
