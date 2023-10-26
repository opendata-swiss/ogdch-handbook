.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Bibliothek <../bibliothek>` :fa:`chevron-right`
   - DCAT-AP Switzerland

**********
DCAT-AP CH
**********

Der Schweizer Metadatenstandard
=====================================

.. container:: Intro

    `DCAT-AP CH <https://dcat-ap.ch/>`__ ist das Schweizer Anwendungsprofil des Data Catalog Vocabulary
    (DCAT) für Datenportale und basiert auf dem
    internationalen :term:`DCAT-AP <DCAT-AP>` Standard. Es ist auf opendata.swiss implementiert.

    Die Metadaten der Datasets, die von opendata.swiss
    :doc:`geharvestet <../../publizieren/publikationsvarianten/harvesting>`
    oder per :doc:`XML-Upload <../../publizieren/publikationsvarianten/metadaten-via-xml-hochladen>`
    auf die Plattform importiert werden, müssen den DCAT-AP CH Standard erfüllen.
    Unten finden Sie beschrieben, welche Mindestanforderungen Ihre Metadaten erfüllen
    müssen (mandatory, conditional). Ebenso finden Sie eine Beschreibung optionaler Felder,
    die von opendata.swiss unterstützt werden (optional).

    DCAT-AP und DCAT-AP CH werden stetig weiterentwickelt. Daher kann es zeitweise zu Abweichungen
    zwischen dem auf opendata.swiss implementierten und dem weiterentwickelten Standard kommen.
    Sollten Sie solche Unterschiede feststellen, dürfen Sie sich gerne
    `an uns wenden <mailto:opendata@bfs.admin.ch>`__.

    Falls Ihre Datasets Metadaten enthalten, die über den auf opendata.swiss implementierten
    Standard hinausgehen, werden diese bei uns weder berücksichtigt noch angezeigt.

    Diese Dokumentation ist derzeit nur in Englisch verfügbar.

DCAT-AP CH Standard Overview
----------------------------

- :ref:`RDF-File Structure & Example <dcat-ap-ch-example-rdf>`
- :ref:`Namespaces <dcat-ap-ch-namespaces>`
- :ref:`Internationalisation <dcat-ap-ch-internationalisation>`
- :ref:`Overview <dcat-ap-ch-overview>`
- :ref:`DCAT Catalog <dcat-ap-ch-catalog>`
- :ref:`DCAT Dataset <dcat-ap-ch-dataset>`
- :ref:`DCAT Resource <dcat-ap-ch-distribution>`


.. _dcat-ap-ch-example-rdf:

RDF-File Structure & Example
------------------------------

Your data catalog must follow the DCAT-AP CH standard.
It consists of the following 4 Classes:

- the catalog
- the publishers
- the datasets
- the distributions

These classes relate to each other as described below.
All examples will be provided in both ``turtle`` and ``rdf/xml``. ``rdf/xml`` is used for the actual import of the data.
You can use a converter to convert between these two formats:
https://www.easyrdf.org/converter

It is important to provide URIs for each of the classes in your catalog.

.. toggle-header::
    :header: Data Catalog in Turtle

    .. code-block:: turtle
        :caption: Here you can see how every class in the catalog has a URI

        @prefix dcat: <http://www.w3.org/ns/dcat#> .
        @prefix dct: <http://purl.org/dc/terms/> .
        @prefix foaf: <http://xmlns.com/foaf/0.1/> .

        <https://tierstatistik.identitas.ch/data/fig-cattle-pyr.csv>
          a dcat:Dataset ;
          dcat:distribution <https://tierstatistik.identitas.ch/de/fig-cattle-pyr.html> ;
          dct:publisher <https://tierstatistik.identitas.ch> .

        <https://tierstatistik.identitas.ch/de/fig-cattle-pyr.html>
          a dcat:Distribution .

.. toggle-header::
    :header: Data Catalog in RDF

    .. code-block:: xml
        :caption: In RDF the URIs are stored in the ``about`` attribute

        <?xml version="1.0" encoding="utf-8" ?>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:dcat="http://www.w3.org/ns/dcat#"
                 xmlns:dct="http://purl.org/dc/terms/"
                 xmlns:foaf="http://xmlns.com/foaf/0.1/">

          <dcat:Dataset rdf:about="https://tierstatistik.identitas.ch/data/fig-cattle-pyr.csv">
            <dcat:distribution>
              <dcat:Distribution rdf:about="https://tierstatistik.identitas.ch/de/fig-cattle-pyr.html">
                </dcat:Distribution>
              </dcat:distribution>
          </dcat:Dataset>

        </rdf:RDF>

The example catalogs above show the classes without any further properties.
Here you can find an overview of all possible properties and which of these you must provide.

- ``mandatory`` means you MUST provide them
- ``conditional`` means you must provide them under certain conditions
- ``optional`` means you may provide them

Example for Download
^^^^^^^^^^^^^^^^^^^^

Have a look at the following file for a quickstart:
:download:`full dataset example <../../../_static/examples/ogdch_dcatap_import.rdf>`

.. _dcat-ap-ch-namespaces:

Namespaces
------------

All classes and properties have definitions that are accessible with a URI.
Usually these URIs are provided in the header of the data catalog and receive an alias there,
so that they can be easily referenced in the rest of the catalog:
A ``dcat:Dataset`` really means ``http://www.w3.org/ns/dcat#Dataset``. To avoid having to
write that throughout the document, a namespace is defined by ``@prefix dcat: <http://www.w3.org/ns/dcat#> .`` in ``turtle``
or ``xmlns:dcat="http://www.w3.org/ns/dcat#"`` in ``RDF``.

These are the namespaces that are used in DCAT-AP CH:

.. code-block:: turtle
    :caption: DCAT-AP CH namespaces in turtle

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
    @prefix schema: <http://schema.org/> .

.. code-block:: xml
    :caption: DCAT-AP CH namespaces in rdf

    <rdf:RDF
      xmlns:dcat="http://www.w3.org/ns/dcat#"
      xmlns:dct="http://purl.org/dc/terms/"
      xmlns:foaf="http://xmlns.com/foaf/0.1/"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
      xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:vcard="http://www.w3.org/2006/vcard/ns#"
      xmlns:schema="http://schema.org/"
    >

.. _dcat-ap-ch-internationalisation:

Internationalisation
--------------------

The DCAT-AP CH Standard allows/supports that text elements of
datasets and their distributions are translated in the following four
languages:

- French (fr)
- German (de)
- Italian (it)
- English (en)

Examples are provided for how to translate those
elements for all relevant properties.

.. _dcat-ap-ch-overview:

Overview
---------

Below you find a list of classes that you need to implement in your catalog.
Translatable elements are marked as such under usage notes.

.. list-table:: Classes of DCAT-AP CH
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - class
      - URI
      - usage notes
    * - :ref:`Catalog <dcat-ap-ch-catalog>`
      - dcat:Catalog
      - **mandatory**
    * - :ref:`Dataset <dcat-ap-ch-dataset>`
      - dcat:Dataset
      - **mandatory**
    * - :ref:`Distribution <dcat-ap-ch-distribution>`
      - dcat:Distribution
      - **mandatory**

.. list-table:: Properties of dcat:Catalog
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
    * - :ref:`dataset <dcat-catalog-dataset>`
      - dcat:dataset
      - **mandatory**

.. list-table:: Properties of dcat:Dataset
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
    * - :ref:`title <dcat-dataset-title>`
      - dct:title
      - **mandatory**, multilingual
    * - :ref:`description <dcat-dataset-description>`
      - dct:description
      - **mandatory**, multilingual
    * - :fa:`exclamation` :ref:`publisher <dcat-dataset-publisher>`
      - dct:publisher
      - **mandatory**, :fa:`exclamation` import format changed
    * - :ref:`contact point <dcat-dataset-contact-point>`
      - dcat:contactPoint
      - **mandatory**
    * - :ref:`identifier <dcat-dataset-identifier>`
      - dct:identifier
      - **mandatory**
    * - :ref:`distribution <dcat-dataset-distribution>`
      - dcat:distribution
      - **mandatory**
    * - :ref:`issued <dcat-dataset-issued>`
      - dct:issued
      - conditional
    * - :ref:`modified <dcat-dataset-modified>`
      - dct:modified
      - conditional
    * - :ref:`theme <dcat-dataset-theme>`
      - dcat:theme
      - conditional
    * - :fa:`exclamation` :ref:`landing page <dcat-dataset-landing-page>`
      - dcat:landingPage
      - conditional,  :fa:`exclamation` import format changed
    * - :ref:`language <dcat-dataset-language>`
      - dct:language
      - conditional
    * - :ref:`keyword <dcat-dataset-keyword>`
      - dcat:keyword
      - optional, multilingual
    * - :ref:`spatial <dcat-dataset-spatial>`
      - dct:spatial
      - optional
    * - :ref:`coverage <dcat-dataset-coverage>`
      - dct:coverage
      - optional
    * - :ref:`temporal <dcat-dataset-temporal>`
      - dct:temporal
      - optional
    * - :fa:`exclamation` :ref:`accrual periodicity <dcat-dataset-accrual-periodicity>`
      - dct:accrualPeriodicity
      - optional, :fa:`exclamation` import format changed
    * - :ref:`related resource <dcat-dataset-relation>`
      - dct:relation
      - optional
    * - :ref:`see also <dcat-dataset-see-also>`
      - rdfs:seeAlso
      - optional


.. list-table:: Properties of dcat:Distribution
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
    * - :ref:`issued <dcat-distribution-issued>`
      - dct:issued
      - **mandatory**
    * - :ref:`access url <dcat-distribution-access-url>`
      - dcat:accessURL
      - **mandatory**
    * - :ref:`rights <dcat-distribution-rights>`
      - dct:rights
      - **mandatory**
    * - :ref:`title <dcat-distribution-title>`
      - dct:title
      - conditional, multilingual
    * - :ref:`description <dcat-distribution-description>`
      - dct:description
      - conditional, multilingual
    * - :ref:`byte size <dcat-distribution-byte-size>`
      - dct:byteSize
      - conditional
    * - :ref:`media type <dcat-distribution-media-type>`
      - dct:mediaType
      - conditional
    * - :ref:`format <dcat-distribution-format>`
      - dct:format
      - conditional
    * - :ref:`language <dcat-distribution-language>`
      - dct:language
      - conditional
    * - :ref:`modified <dcat-distribution-modified>`
      - dct:modified
      - conditional
    * - :ref:`license <dcat-distribution-license>`
      - dcat:license
      - optional
    * - :ref:`identifier <dcat-distribution-identifier>`
      - dct:identifier
      - optional
    * - :ref:`download url <dcat-distribution-download-url>`
      - dcat:downloadURL
      - optional
    * - :ref:`coverage <dcat-distribution-coverage>`
      - dct:coverage
      - optional

.. _dcat-ap-ch-catalog:

Catalog
----------------------

.. _dcat-catalog-class:

dcat:Catalog (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/catalog-class.rst

.. toggle-header::
    :header: Class ``dcat:Catalog`` in Turtle

    .. include:: dcat-examples/catalog-class-ttl.rst

.. toggle-header::
    :header: Class ``dcat:Catalog`` in Rdf/xml

    .. include:: dcat-examples/catalog-class-rdf.rst

.. _dcat-catalog-dataset:

dcat:dataset (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/catalog-datasets.rst

.. toggle-header::
    :header: Property ``dcat:dataset`` of ``dcat:Catalog`` in Turtle

    .. include:: dcat-examples/catalog-datasets-ttl.rst

.. toggle-header::
    :header:  Property ``dcat:dataset`` of ``dcat:Catalog`` in Rdf/xml

    .. include:: dcat-examples/catalog-datasets-rdf.rst

.. _dcat-ap-ch-dataset:

Dataset
----------------------

.. _dcat-dataset-class:

dcat:Dataset (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-class.rst

.. toggle-header::
    :header: Class ``dcat:Dataset`` with a URI in Turtle

    .. include:: dcat-examples/dataset-class-ttl.rst

.. toggle-header::
    :header:  Class ``dcat:Dataset`` with a URI in Rdf/xml

    .. include:: dcat-examples/dataset-class-rdf.rst

.. _dcat-dataset-identifier:

dct:identifier (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-identifier.rst

.. toggle-header::
    :header: Property ``dct:identifier`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-identifier-ttl.rst

.. toggle-header::
    :header:  Property ``dct:identifier`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-identifier-rdf.rst

.. _dcat-dataset-title:

dct:title (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-title.rst

.. toggle-header::
    :header: Property ``dct:title`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-title-ttl.rst

.. toggle-header::
    :header: Property ``dct:title`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-title-rdf.rst

.. _dcat-dataset-description:

dct:description (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-description.rst

.. toggle-header::
    :header: Property ``dct:description`` of ``dcat:Dataset`` using Markdown in Turtle

    .. include:: dcat-examples/dataset-description-ttl.rst

.. toggle-header::
    :header: Property ``dct:description`` of ``dcat:Dataset`` using Markdown in Rdf/xml

    .. include:: dcat-examples/dataset-description-rdf.rst

.. _dcat-dataset-publisher:

dct:publisher (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-publisher.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dct:publisher`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-publisher-ttl.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dct:publisher`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-publisher-rdf.rst

.. toggle-header::
    :header: Deprecated: Property ``dct:publisher`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/deprecated/dataset-publisher-ttl.rst

.. toggle-header::
    :header: Deprecated: Property ``dct:publisher`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/deprecated/dataset-publisher-rdf.rst

.. _dcat-dataset-contact-point:

dcat:contactPoint (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-contact-point.rst

.. toggle-header::
    :header: Property ``dcat:contactPoints`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-contact-point-ttl.rst

.. toggle-header::
    :header: Property ``dcat:contactPoints`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-contact-point-rdf.rst

.. _dcat-dataset-distribution:

dcat:distribution (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-distribution.rst

.. toggle-header::
    :header: Property ``dcat:distribution`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-distribution-ttl.rst

.. toggle-header::
    :header: Property ``dcat:distribution`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-distribution-rdf.rst

.. _dcat-dataset-issued:

dct:issued (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-issued.rst

.. toggle-header::
    :header: Property ``dct:issued`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-issued-ttl.rst

.. toggle-header::
    :header: Property ``dct:issued`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-issued-rdf.rst

.. _dcat-dataset-modified:

dct-modified (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/dataset-modified.rst

.. toggle-header::
    :header: Property ``dct:modified`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-modified-ttl.rst

.. toggle-header::
    :header: Property ``dct:modified`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-modified-rdf.rst

.. _dcat-dataset-theme:

dcat:theme (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-theme.rst

.. toggle-header::
    :header: Property ``dcat:theme`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-theme-ttl.rst

.. toggle-header::
    :header: Property ``dcat:theme`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-theme-rdf.rst

.. _dcat-dataset-language:

dct:language (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-language.rst

.. toggle-header::
    :header: Property ``dct:language`` of ``dcat:Dataset``  in Turtle

    .. include:: dcat-examples/dataset-language-ttl.rst

.. toggle-header::
    :header: Property ``dct:language`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-language-rdf.rst


.. _dcat-dataset-landing-page:

dcat:landingPage (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-landing-page.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dcat:landingPage`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-landing-page-ttl.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dcat:landingPage`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-landing-page-rdf.rst

.. toggle-header::
    :header: Deprecated: Property ``dcat:landingPage`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/deprecated/dataset-landing-page-ttl.rst

.. toggle-header::
    :header: Deprecated: Property ``dcat:landingPage`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/deprecated/dataset-landing-page-rdf.rst

.. _dcat-dataset-relation:

dct:relation (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-relation.rst

.. toggle-header::
    :header: Property ``dct:relation`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-relation-ttl.rst

.. toggle-header::
    :header: Property ``dct:relation`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-relation-rdf.rst

.. _dcat-dataset-documenation:

dct:documentation (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-documentation.rst

.. toggle-header::
    :header: Property ``dct:documentation`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-relation-ttl.rst

.. toggle-header::
    :header: Property ``dct:relation`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-relation-rdf.rst

.. _dcat-dataset-keyword:

dcat:keyword (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/dataset-keyword.rst

.. toggle-header::
    :header: Property ``dcat:keyword`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-keyword-ttl.rst

.. toggle-header::
    :header: Property ``dcat:keyword`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-keyword-rdf.rst

.. _dcat-dataset-spatial:

dct:spatial (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-spatial.rst

.. toggle-header::
    :header: Property ``dct:spatial`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-spatial-ttl.rst

.. toggle-header::
    :header: Property ``dct:spatial`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-spatial-rdf.rst

.. _dcat-dataset-coverage:

dct:coverage (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-coverage.rst

.. toggle-header::
    :header: Property ``dct:coverage`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-coverage-ttl.rst

.. toggle-header::
    :header: Property ``dct:coverage`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-coverage-rdf.rst

.. _dcat-dataset-temporal:

dct:temporal (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-temporal.rst

.. toggle-header::
    :header: Property ``dct:temporal`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-temporal-ttl.rst

.. toggle-header::
    :header: Property ``dct:temporal`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-temporal-rdf.rst

.. _dcat-dataset-accrual-periodicity:

dct:accrual-periodicity (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/dataset-accrual-periodicity.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dct:accrualPeriodicity`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-accrual-periodicity-ttl.rst

.. toggle-header::
    :header: :fa:`exclamation` Property ``dct:accrualPeriodicity`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-accrual-periodicity-rdf.rst

.. toggle-header::
    :header: Deprecated: Property ``dct:accrualPeriodicity`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/deprecated/dataset-accrual-periodicity-ttl.rst

.. toggle-header::
    :header: Deprecated: Property ``dct:accrualPeriodicity`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/deprecated/dataset-accrual-periodicity-rdf.rst

.. _dcat-dataset-see-also:

dcat:seeAlso (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/dataset-see-also.rst

.. toggle-header::
    :header: Property ``rdfs:seeAlso`` of ``dcat:Dataset`` in Turtle

    .. include:: dcat-examples/dataset-see-also-ttl.rst

.. toggle-header::
    :header: Property ``rdfs:seeAlso`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/dataset-see-also-rdf.rst

.. _dcat-ap-ch-distribution:

Distribution
------------

.. _dcat-distribution-class:

dcat:Distribution (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-class.rst

.. toggle-header::
    :header: Class ``dcat:Distribution`` with a URI in Turtle

    .. include:: dcat-examples/distribution-class-ttl.rst

.. toggle-header::
    :header: Class ``dcat:Distribution`` with a URI in Rdf/xml

    .. include:: dcat-examples/distribution-class-rdf.rst

.. _dcat-distribution-access-url:

dcat:accessURL (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-access-url.rst

.. toggle-header::
    :header: Property ``dcat:accessURL`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-access-url-ttl.rst

.. toggle-header::
    :header: Property ``dcat:accessURL`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-access-url-rdf.rst


.. _dcat-distribution-download-url:

dcat:downloadURL (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-download-url.rst

.. toggle-header::
    :header: Property ``dcat:downloadURL`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-download-url-ttl.rst

.. toggle-header::
    :header: Property ``dcat:downloadURL`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-download-url-rdf.rst

.. _dcat-distribution-issued:

dct:issued (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-issued.rst

.. toggle-header::
    :header: Property ``dct:issued`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-issued-ttl.rst

.. toggle-header::
    :header: Property ``dct:issued`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-issued-rdf.rst

.. _dcat-distribution-rights:

dct:rights (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-rights.rst

.. toggle-header::
    :header: Property ``dct:rights`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-rights-ttl.rst

.. toggle-header::
    :header: Property ``dct:rights`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-rights-rdf.rst

.. _dcat-distribution-media-type:

dct:mediaType (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-media-type.rst

.. toggle-header::
    :header: Property ``dcat:mediaType`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-media-type-ttl.rst

.. toggle-header::
    :header: Property ``dcat:mediaType`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-media-type-rdf.rst

.. _dcat-distribution-format:

dct:format (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-format.rst

.. toggle-header::
    :header: Property ``dct:format`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-format-ttl.rst

.. toggle-header::
    :header: Property ``dct:format`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-format-rdf.rst

.. _dcat-distribution-byte-size:

dcat:byteSize (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-byte-size.rst

.. toggle-header::
    :header: Property ``dcat:byteSize`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-byte-size-ttl.rst

.. toggle-header::
    :header: Property ``dcat:byteSize`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-byte-size-rdf.rst

.. _dcat-distribution-modified:

dct:modified (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-modified.rst

.. toggle-header::
    :header: Property ``dct:modified`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-modified-ttl.rst

.. toggle-header::
    :header: Property ``dct:modified`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-modified-rdf.rst

.. _dcat-distribution-title:

dct:title (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-title.rst

.. toggle-header::
    :header: Property ``dct:title`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-title-ttl.rst

.. toggle-header::
    :header: Property ``dct:title`` of ``dcat:Dataset`` in Rdf/xml

    .. include:: dcat-examples/distribution-title-rdf.rst

.. _dcat-distribution-description:

dct:description (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-description.rst

.. toggle-header::
    :header: Property ``dct:description`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-description-ttl.rst

.. toggle-header::
    :header: Property ``dct:description`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-description-rdf.rst

.. _dcat-distribution-language:

dct:language (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

    .. include:: dcat-definitions/distribution-language.rst

.. toggle-header::
    :header: Property ``dct:language`` of ``dcat:Distribution``  in Turtle

    .. include:: dcat-examples/distribution-language-ttl.rst

.. toggle-header::
    :header: Property ``dct:language`` of ``dcat:Distribution``  in Rdf/xml

    .. include:: dcat-examples/distribution-language-rdf.rst

.. _dcat-distribution-identifier:

dct:identifier (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-identifier.rst

.. toggle-header::
    :header:  Property ``dct:identifier`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-identifier-ttl.rst

.. toggle-header::
    :header:  Property ``dct:identifier`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-identifier-rdf.rst

.. _dcat-distribution-coverage:

dct:coverage (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-coverage.rst

.. toggle-header::
    :header: Property ``dct:coverage`` of ``dcat:Distribution`` in Turtle

    .. include:: dcat-examples/distribution-coverage-ttl.rst

.. toggle-header::
    :header: Property ``dct:coverage`` of ``dcat:Distribution`` in Rdf/xml

    .. include:: dcat-examples/distribution-coverage-rdf.rst

.. _dcat-distribution-license:

dct:license (DCAT)
^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: Mapping

   .. include:: dcat-definitions/distribution-license.rst
