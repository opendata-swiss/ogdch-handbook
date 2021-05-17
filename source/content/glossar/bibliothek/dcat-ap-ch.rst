.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Bibliothek <../bibliothek>` :fa:`chevron-right`
   - DCAT-AP Switzerland

**********
DCAT-AP-CH
**********

Der Schweizer Metadaten-Datenstandard
=====================================

.. container:: Intro

    DCAT-AP-CH ist der Schweizer Datenstandard, der derzeit auf
    `opendata.swiss <https://opendata.swiss/de/>`__
    implementiert ist. Er basiert auf dem internationalen DCAT-AP Standard.

    Datasets, die auf opendata.swiss geharvestet werden oder per XML-Upload auf
    die Plattform importiert werden, werden in diesem Format erwartet. DCAT-AP
    ist ein offener Standard. Ihre Datasets können also auch Felder enthalten,
    die über diesen Standard hinausgehen. Diese werden bei uns nicht berücksichtigt
    und auch nicht angezeigt. Auf der anderen Seite haben wir Mindest-Erwartungen
    an Ihre Metadaten, die hier beschrieben sind. Ebenso finden Sie hier eine Beschreibung
    optionaler Felder, die von opendata.swiss unterstützt werden.
    Der DCAT-AP ist in ständiger Weiterentwicklung. Das gilt auch für den DCAT-AP-CH
    und für den Daten-Standard, der auf opendata.swiss implementiert ist.
    Daher gibt es teilweise Abweichungen zwischen diesen Datenstandards.
    Sollten Sie solche feststellen,
    `wenden Sie sich mit Ihren Fragen gerne an uns <mailto:opendata@bfs.admin.ch>`__.

    Diese Dokumentation ist derzeit nur in Englisch verfügbar.

DCAT-AP-CH Standard Overview
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

Your datacatalog must follow the DCAT-AP-CH standard.
It consists of the following 4 Classes:

- the catalog
- the publishers
- the datasets
- the distributions

These classes relate to each other as described below.
All examples will be provided in both ``turtle`` and ``rdf``. ``turtle`` is generally
easier to read and understand. ``rdf`` is used for the actual import of the data
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

The example catalogs above just show the classes. But each of those classes has also further properties.
Here you can find an overview of those properties and which of these you must provide:

- ``mandatory`` means you MUST provide them
- ``contidional`` means you must provide them under certain conditions
- ``optional`` means you may provide them

Example for Download
^^^^^^^^^^^^^^^^^^^^

Have a look at the following file for a quickstart:
:download:`full dataset example <../../../_static/examples/ogdch_dcatap_import.rdf>`

.. _dcat-ap-ch-namespaces:

Namespaces
------------

All classes and properties have definitions that are accessible with an URI.
Usually this URIs are provided in the header of the datacatalog and receive an alias there,
so that they can be easier referenced in the rest of the catalog:
A ``dcat:Dataset`` really means ``http://www.w3.org/ns/dcat#Dataset``. But since you don't want
to write that throughout the document: a namespace is defined by ``@prefix dcat: <http://www.w3.org/ns/dcat#> .`` in ``turtle``
or ``xmlns:dcat="http://www.w3.org/ns/dcat#"`` in ``RDF``

These here are the namespaces that are used in DCAT-AP-CH:

.. code-block:: turtle
    :caption: DCAT-AP-CH namespaces in turtle

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix dc: <http://purl.org/dc/elements/1.1/> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
    @prefix schema: <http://schema.org/> .

.. code-block:: xml
    :caption: DCAT-AP-CH namespaces in rdf

    <rdf:RDF
      xmlns:dcat="http://www.w3.org/ns/dcat#"
      xmlns:dct="http://purl.org/dc/terms/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
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

The DCAT-AP for Switzerland Standard expects that text elements of the
datasets and their distributions be translated in the following four
languages: \* French (fr) \* German (de) \* Italian (it) \* English (en).
Examples are provided for how to translate those
elements for all relevant properties.

.. _dcat-ap-ch-overview:

Overview
---------

Below you find a list of classes that you need to implement in you catalog.
Translateable elements have been marked. Also DCAT-AP-CH conformance has been
marked.

.. list-table:: Properties of dcat:Catalog
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
    * - `catalog-class`_
      - dcat:Catalog
      - **mandatory**
    * - `catalog-datasets`_
      - dcat:dataset
      - **mandatory**

.. list-table:: Properties of dcat:Dataset
    :widths: 20 20 30
    :header-rows: 1
    :stub-columns: 1

    * - property
      - URI
      - usage notes
    * - `dataset-class`_
      - dcat:Catalog
      - **mandatory**
    * - `dataset-identifier`_
      - dct:identifier
      - **mandatory**
    * - `dataset-title`_
      - dct:title
      - **mandatory**, multilingual
    * - `dataset-description`_
      - dct:description
      - **mandatory**, multilingual
    * - `dataset-publisher`_
      - dct:publisher
      - **mandatory**, **CHANGED rule**
    * - `dataset-contacts`_
      - dcat:contactPoints
      - **mandatory**
    * - `dataset-distributions`_
      - dcat:distribution
      - **mandatory**
    * - `dataset-issued`_
      - dct:issued
      - conditional
    * - `dataset-modified`_
      - dct:modified
      - conditional
    * - `dataset-categories`_
      - dcat:theme
      - conditional
    * - `dataset-language`_
      - dct:language
      - conditional
    * - `dataset-landing-page`_
      - dcat:landingPage
      - conditional
    * - `dataset-further-information`_
      - dct:description
      - optional
    * - `dataset-keywords`_
      - dct:keyword
      - optional
    * - `dataset-spatial`_
      - dct:spatial
      - optional
    * - `dataset-coverage`_
      - dct:coverage
      - optional
    * - `dataset-temporal`_
      - dct:temporal
      - optional
    * - `dataset-frequency`_
      - dct:accrualPeriodicity
      - optional
    * - `related-datasets`_
      - rdfs:seeAlsos
      - optional

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
    * - `distribution-coverage`_
      - dct:coverage
      - optional
    * - `distribution-license`_
      - dct:license
      - optional, currently not used

.. _dcat-ap-ch-catalog:

Catalog
----------------------

.. include:: dcat-definitions/catalog-class.rst
.. include:: dcat-examples/catalog-class-ttl.rst
.. include:: dcat-examples/catalog-class-rdf.rst

.. include:: dcat-definitions/catalog-datasets.rst
.. include:: dcat-examples/catalog-datasets-ttl.rst
.. include:: dcat-examples/catalog-datasets-rdf.rst

.. _dcat-ap-ch-dataset:

Dataset
----------------------

.. include:: dcat-definitions/dataset-class.rst
.. include:: dcat-examples/dataset-class-ttl.rst
.. include:: dcat-examples/dataset-class-rdf.rst

.. include:: dcat-definitions/dataset-identifier.rst
.. include:: dcat-examples/dataset-identifier-ttl.rst
.. include:: dcat-examples/dataset-identifier-rdf.rst

.. include:: dcat-definitions/dataset-title.rst
.. include:: dcat-examples/dataset-title-ttl.rst
.. include:: dcat-examples/dataset-title-rdf.rst

.. include:: dcat-definitions/dataset-description.rst
.. include:: dcat-examples/dataset-description-ttl.rst
.. include:: dcat-examples/dataset-description-rdf.rst

.. include:: dcat-definitions/dataset-publisher.rst
.. include:: dcat-examples/dataset-publisher-ttl.rst
.. include:: dcat-examples/dataset-publisher-rdf.rst
.. include:: dcat-examples/dataset-publisher-new-ttl.rst
.. include:: dcat-examples/dataset-publisher-new-rdf.rst

.. include:: dcat-definitions/dataset-contacts.rst
.. include:: dcat-examples/dataset-contacts-ttl.rst
.. include:: dcat-examples/dataset-contacts-rdf.rst

.. include:: dcat-definitions/dataset-distributions.rst
.. include:: dcat-examples/dataset-distributions-ttl.rst
.. include:: dcat-examples/dataset-distributions-rdf.rst

.. include:: dcat-definitions/dataset-issued.rst
.. include:: dcat-examples/dataset-issued-ttl.rst
.. include:: dcat-examples/dataset-issued-rdf.rst

.. include:: dcat-definitions/dataset-modified.rst
.. include:: dcat-examples/dataset-modified-ttl.rst
.. include:: dcat-examples/dataset-modified-rdf.rst

.. include:: dcat-definitions/dataset-categories.rst
.. include:: dcat-examples/dataset-categories-ttl.rst
.. include:: dcat-examples/dataset-categories-rdf.rst

.. include:: dcat-definitions/dataset-language.rst
.. include:: dcat-examples/dataset-language-ttl.rst
.. include:: dcat-examples/dataset-language-rdf.rst

.. include:: dcat-definitions/dataset-landing-page.rst
.. include:: dcat-examples/dataset-landing-page-ttl.rst
.. include:: dcat-examples/dataset-landing-page-rdf.rst
.. include:: dcat-examples/dataset-landing-page-new-ttl.rst
.. include:: dcat-examples/dataset-landing-page-new-rdf.rst

.. include:: dcat-definitions/dataset-further-information.rst
.. include:: dcat-examples/dataset-further-information-ttl.rst
.. include:: dcat-examples/dataset-further-information-rdf.rst

.. include:: dcat-definitions/dataset-keywords.rst
.. include:: dcat-examples/dataset-keywords-ttl.rst
.. include:: dcat-examples/dataset-keywords-rdf.rst

.. include:: dcat-definitions/dataset-spatial.rst
.. include:: dcat-examples/dataset-spatial-ttl.rst
.. include:: dcat-examples/dataset-spatial-rdf.rst

.. include:: dcat-definitions/dataset-coverage.rst
.. include:: dcat-examples/dataset-coverage-ttl.rst
.. include:: dcat-examples/dataset-coverage-rdf.rst

.. include:: dcat-definitions/dataset-temporal.rst
.. include:: dcat-examples/dataset-temporal-ttl.rst
.. include:: dcat-examples/dataset-temporal-rdf.rst

.. include:: dcat-definitions/dataset-frequency.rst
.. include:: dcat-examples/dataset-frequency-ttl.rst
.. include:: dcat-examples/dataset-frequency-rdf.rst

.. include:: dcat-definitions/related-datasets.rst
.. include:: dcat-examples/related-datasets-ttl.rst
.. include:: dcat-examples/related-datasets-rdf.rst

.. _dcat-ap-ch-distribution:

Distribution
------------

.. include:: dcat-definitions/distribution-class.rst
.. include:: dcat-examples/distribution-class-ttl.rst
.. include:: dcat-examples/distribution-class-rdf.rst

.. include:: dcat-definitions/distribution-access-url.rst
.. include:: dcat-examples/distribution-access-url-ttl.rst
.. include:: dcat-examples/distribution-access-url-rdf.rst

.. include:: dcat-definitions/distribution-download-url.rst
.. include:: dcat-examples/distribution-download-url-ttl.rst
.. include:: dcat-examples/distribution-download-url-rdf.rst

.. include:: dcat-definitions/distribution-issued.rst
.. include:: dcat-examples/distribution-issued-ttl.rst
.. include:: dcat-examples/distribution-issued-rdf.rst

.. include:: dcat-definitions/distribution-rights.rst
.. include:: dcat-examples/distribution-rights-ttl.rst
.. include:: dcat-examples/distribution-rights-rdf.rst

.. include:: dcat-definitions/distribution-media-type.rst
.. include:: dcat-examples/distribution-media-type-ttl.rst
.. include:: dcat-examples/distribution-media-type-rdf.rst

.. include:: dcat-definitions/distribution-format.rst
.. include:: dcat-examples/distribution-format-ttl.rst
.. include:: dcat-examples/distribution-format-rdf.rst

.. include:: dcat-definitions/distribution-size.rst
.. include:: dcat-examples/distribution-size-ttl.rst
.. include:: dcat-examples/distribution-size-rdf.rst

.. include:: dcat-definitions/distribution-modified.rst
.. include:: dcat-examples/distribution-modified-ttl.rst
.. include:: dcat-examples/distribution-modified-rdf.rst

.. include:: dcat-definitions/distribution-title.rst
.. include:: dcat-examples/distribution-title-ttl.rst
.. include:: dcat-examples/distribution-title-rdf.rst

.. include:: dcat-definitions/distribution-description.rst
.. include:: dcat-examples/distribution-description-ttl.rst
.. include:: dcat-examples/distribution-description-rdf.rst

.. include:: dcat-definitions/distribution-language.rst
.. include:: dcat-examples/distribution-language-ttl.rst
.. include:: dcat-examples/distribution-language-rdf.rst

.. include:: dcat-definitions/distribution-identifier.rst
.. include:: dcat-examples/distribution-identifier-ttl.rst
.. include:: dcat-examples/distribution-identifier-rdf.rst

.. include:: dcat-definitions/distribution-coverage.rst
.. include:: dcat-examples/distribution-coverage-ttl.rst
.. include:: dcat-examples/distribution-coverage-rdf.rst

.. include:: dcat-definitions/distribution-license.rst
