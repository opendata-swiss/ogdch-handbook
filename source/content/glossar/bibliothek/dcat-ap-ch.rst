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
- :ref:`DCAT Catalog <dcat-ap-ch-catalog>`
- :ref:`DCAT Dataset <dcat-ap-ch-dataset>`
- :ref:`DCAT Resource <dcat-ap-ch-distribution>`


.. _dcat-ap-ch-example-rdf:

RDF-File Structure & Example
----------------------------

An RDF Datacatalog has the following structure:

.. code-block:: xml

  <rdf:RDF>
    <dcat:Catalog>
      <dcat:dataset>
        <dcat:Dataset>
        ...
        </dcat:Dataset>
      </dcat:dataset>
      <dcat:dataset>
        <dcat:Dataset>
        ...
        </dcat:Dataset>
      </dcat:dataset>
      <dcat:dataset>
        <dcat:Dataset>
        ...
        </dcat:Dataset>
      </dcat:dataset>
      ...
    </dcat:Catalog>
  </rdf:RDF>

Each Dataset contains Resources, which contain the actual data:

.. code-block:: xml

    <dcat:Dataset>
      <dcat:distribution>
        <dcat:Distribution>
        ...
        </dcat:Distributiont>
      </dcat:distribution>
      <dcat:distribution>
        <dcat:Distribution>
        ...
        </dcat:Distributiont>
      </dcat:distribution>
      <dcat:distribution>
        <dcat:Distribution>
        ...
        </dcat:Distributiont>
      </dcat:distribution>
      ...
    </dcat:Dataset>

Example for Download
^^^^^^^^^^^^^^^^^^^^

Have a look at the following file for a quickstart:
:download:`full dataset example <../../../_static/examples/ogdch_dcatap_import.rdf>`

.. _dcat-ap-ch-namespaces:

Namespaces
----------

.. code:: xml

   <rdf:RDF
     xmlns:dct="http://purl.org/dc/terms/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:dcat="http://www.w3.org/ns/dcat#"
     xmlns:foaf="http://xmlns.com/foaf/0.1/"
     xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:vcard="http://www.w3.org/2006/vcard/ns#"
     xmlns:odrs="http://schema.theodi.org/odrs#"
     xmlns:schema="http://schema.org/">

.. _dcat-ap-ch-internationalisation:

Internationalisation
--------------------

The DCAT-AP for Switzerland Standard expects that text elements of the
datasets and their distributions be translated in the following four
languages: \* French (fr) \* German (de) \* Italian (it) \* English (en)

The multi-lingual elements have to contain the ``xml:lang`` attribute,
as the following example show:

.. code:: xml

   <dct:title xml:lang="fr">FR Titre</dct:title>
   <dct:title xml:lang="de">DE Titel</dct:title>
   <dct:title xml:lang="it">IT Titolo</dct:title>
   <dct:title xml:lang="en">EN Title</dct:title>

.. _dcat-ap-ch-catalog:

Catalog
-------

.. container:: instructions

    Please click on the text below for more details.

.. container:: attribute

    **dcat:Catalog** 1..1

    :Content: Contains nested elements of type :ref:`dcat:Dataset <dcat-ap-ch-dataset>`
    :Mandatory: yes
    :Cardinality: 1..1
    :Description: Catalog with datasets

    .. code-block:: xml
       :caption: dcat:Catalog

       <dcat:Catalog>
           <dcat:dataset>
               [...]
           </dcat:dataset>
           [further dcat:dataset]
       </dcat:Catalog>

.. container:: attribute

    **dcat:dataset** 1..n

    :Content: Contains single nested element of :ref:`dcat:Dataset <dcat-ap-ch-dataset>`.
    :Mandatory: yes
    :Cardinality: 1..n
    :Description: Wrapper for a dataset of the catalog

    .. code-block:: xml
       :caption: dcat:dataset

       <dcat:dataset>
           <dcat:Dataset rdf:about="http://swisstopo/325">
               [Content of dataset]
           </dcat:Dataset>
       </dcat:dataset>
       [further dcat:dataset]

.. _dcat-ap-ch-dataset:

Dataset
-------

.. container:: attribute

    **dcat:Dataset** 1..1

    :Content: Contains single nested element of :ref:`dcat:Dataset <dcat-ap-ch-dataset>`.
    :Mandatory: yes
    :Cardinality: 1..1
    :Attributes:
       - Name: ``rdf:about``
       - Content: Unique identifier for dataset
       - Mandatory: yes
    :Description: A single dataset of the catalog

    .. code-block:: xml
       :caption: dcat:Dataset

       <dcat:Dataset rdf:about="http://swisstopo/325">
           [Content of dataset]
       </dcat:Dataset>

.. container:: attribute

    **dct:identifier** 1..1

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: yes
    :Cardinality: 1..1
    :Description: Unique identifier of the dataset across all publishers. A good way
                  to make sure this identifier is unique is to link the source system
                  ID with the ID of the publisher:
                  ``[Source-Dataset-ID]@[Source-Organisation-ID]``.
                  It is recommended that the identifier consists out of the following
                  characters: ``A-Za-z``, ``0-9`` without special characters, except
                  ``-`` and ``_``

    .. code-block:: xml
       :caption: dct:identifier

       <dct:identifier>325@swisstopo</dct:identifier>

.. container:: attribute

    **dct:title** 1..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: yes
    :Cardinality: 1..n (one for each language)
    :Attributes: - Name: ``xml:lang``
                 - Content: ``en``, ``de``, ``fr``, ``it``
                 - Description: Language of the element
                 - Mandatory : yes
    :Description: Title of the dataset in the language defined by the
                  ``xml:lang`` attribute

    .. code-block:: xml
       :caption: dct:title

        <dct:title xml:lang="de">Eisenbahnlärm Nacht</dct:title>

.. container:: attribute

    **dct:description** 1..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: yes
    :Cardinality: 1..n (one for each language)
    :Attributes: - Name: ``xml:lang``
                 - Content: ``en``, ``de``, ``fr``, ``it``
                 - Description: Language of the element
                 - Mandatory : yes
    :Description: Description of the dataset in the the language defined by the
                  ``xml:lang`` attribute

    .. code-block:: xml
       :caption: dct:description

       <dct:description xml:lang="de">
           Die Karte zeigt, welcher Lärmbelastung die Bevölkerung
           durch den Schienenverkehr ausgesetzt ist.
       </dct:description>

.. container:: attribute

    dct:issued 0..n

    :Type: Date and time in `ISO-8601 <https://en.wikipedia.org/wiki/ISO_8601>`__ format
    :Mandatory:  Can be left out if there is no :ref:`distribution <dcat-ap-ch-distribution>`
    :Cardinality: 0..1
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#dateTime
                 - Description: Type of the field
                 - Mandatory: yes

    .. code-block:: xml
       :caption: dct:issued

       <dct:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime"> 2013-04-26T01:00:00Z</dct:issued>

.. container:: attribute

    dct:modified 0..1

    :Type: Date and time in `ISO-8601 <https://en.wikipedia.org/wiki/ISO_8601>`__ format
    :Mandatory:  Only when the dataset has changed since the first publication
    :Cardinality: 0..1
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#dateTime
                 - Description: Type of the field
                 - Mandatory: yes
    :Description: Date of the last change (since the first publication on opendata.swiss)

    .. code-block:: xml
       :caption: dct:modified

       <dct:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime"> 2013-04-26T01:00:00Z</dct:modified>

.. container:: attribute

    **dct:publisher** 1..n

    :Elements: ``rdf:Description``
    :Type: Nested element
    :Mandatory: yes
    :Cardinality: 1..n
    :Description: The publishers of the dataset.
                  ``rdf:about`` is an optional attribute.

    .. code-block:: xml
       :caption: dct:publisher

       <dct:publisher>
           <rdf:Description rdf:about="https://www.bafu.admin.ch/">
               <rdfs:label>Bundesamt für Landestopografie swisstopo</rdfs:label>
           </rdf:Description>
       </dct:publisher>

.. container:: attribute

    **dcat:contactPoint** 1..n

    :Elements: ``vcard:Organization``
    :Type: ``vcard:Kind``
    :Mandatory: yes
    :Cardinality: 1..n
    :Description: One or more contact email addresses for this dataset
                  ``vcard:fn``. Description of the point of contact
                  ``vcard:hasEmail`` has an attribute ``rdf:resource`` which
                  contains the email of the point of contact (including mailto:)

    .. code-block:: xml
       :caption: dcat:contactPoint

       <dcat:contactPoint>
           <vcard:Organization>
               <vcard:fn>Abteilung Lärm BAFU</vcard:fn>
               <vcard:hasEmail rdf:resource="mailto:noise@bafu.admin.ch"/>
           </vcard:Organization>
       </dcat:contactPoint>

       <dcat:contactPoint>
           <vcard:Individual>
               <vcard:fn>Sekretariat BAFU</vcard:fn>
               <vcard:hasEmail rdf:resource="mailto:sekretariat@bafu.admin.ch"/>
           </vcard:Individual>
       </dcat:contactPoint>

.. container:: attribute

    **dcat:theme** 1..n

    :Type: ``skos:Concept``
           http://www.w3.org/2009/08/skos-reference/skos.html#Concept
    :Mandatory: yes
    :Cardinality: 1..n
    :Attributes: - Name: ``rdf:resource``
                 - Description: URI to the category
                 - Mandatory: yes
    :Description: Categorisation of the data. In the ``rdf:resource``
                  attribute, the unique URI of the category from
                  :download:`SKOS-RDF <../../../_static/examples/opendataswiss-themes.rdf>`
                  (RDF) must be given.
                  The following values are accepted from Themes:
                  https://opendata.swiss/group/work,
                  https://opendata.swiss/group/construction,
                  https://opendata.swiss/group/population,
                  https://opendata.swiss/group/education,
                  https://opendata.swiss/group/energy,
                  https://opendata.swiss/group/finances,
                  https://opendata.swiss/group/geography,
                  https://opendata.swiss/group/legislation,
                  https://opendata.swiss/group/health,
                  https://opendata.swiss/group/trade,
                  https://opendata.swiss/group/industry,
                  https://opendata.swiss/group/crime,
                  https://opendata.swiss/group/culture,
                  https://opendata.swiss/group/agriculture,
                  https://opendata.swiss/group/mobility,
                  https://opendata.swiss/group/public-order,
                  https://opendata.swiss/group/politics,
                  https://opendata.swiss/group/prices,
                  https://opendata.swiss/group/territory,
                  https://opendata.swiss/group/social-security,
                  https://opendata.swiss/group/statistical-basis,
                  https://opendata.swiss/group/tourism,
                  https://opendata.swiss/group/administration,
                  https://opendata.swiss/group/national-economy,

    .. code-block:: xml
      :caption: dcat:theme

       <dcat:theme rdf:resource="https://opendata.swiss/group/population"/>

.. container:: attribute

    dct:language 0..n

    :Type: ``rdfs:Literal`` ISO 639-1 two-letter code
    :Content: ``en``, ``de``, ``fr``, ``it``
    :Mandatory: no
    :Cardinality: 0..n (for each language)
    :Description: Should contain all languages for which a distribution is available. This field is not validated and is used for display purposes. If all
                  distributions are language-independant, this field can be left out.

    .. code-block:: xml
      :caption: dct:language

       <dct:language>de</dct:language>

.. container:: attribute

    dct:relation 0..n

    :Elements:  ``rdf:Description``
    :Type: Nested element
    :Mandatory: no
    :Cardinality: 0..n
    :Description: A relation to a document. The
                  ``rdf:about`` must link to a
                  related document.

    .. code-block:: xml
      :caption: dct:language

       <dct:relation>
           <rdf:Description rdf:about="http://www.bafu.admin.ch/laerm/index.html?lang=de">
               <rdfs:label>Webseite des BAFU</rdfs:label>
           </rdf:Description>
       </dct:relation>

.. container:: attribute

    dcat:keyword 0..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no
    :Cardinality: 0..n
    :Attributes: - Name: ``xml:lang``
                 - Content:  ``en``, ``de``, ``fr``, ``it``
                 - Description: Language of the element
                 - Mandatory: yes
    :Description: Keyword who describes this dataset

    .. code-block:: xml
      :caption: dct:language

       <dcat:keyword xml:lang="de">Nacht</dcat:keyword>
       <dcat:keyword xml:lang="fr">Nuit</dcat:keyword>
       <dcat:keyword xml:lang="it">Noche</dcat:keyword>
       <dcat:keyword xml:lang="en">Night</dcat:keyword>

.. container:: attribute

    dcat:landingPage 0..1

    :Type: ``foaf:Document`` http://xmlns.com/foaf/spec/#term_Document
    :Mandatory: no
    :Cardinality: 0..n
    :Description: Website of the dataset with related information

    .. code-block:: xml
      :caption: dcat:landingPage

       <dcat:landingPage>http://www.bafu.admin.ch/laerm/index.html?lang=de</dcat:landingPage>

.. container:: attribute

    dct:spatial 0..n

    :Type: ``dct:Location`` https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-Location
    :Mandatory: no
    :Cardinality: 0..n
    :Description: Geographical classification of the dataset. Can be a description, coordinates,
                  a bounding-box or a polygon.
                  This field currently supports GeoJSON with the
                  `LOCN extension <https://www.w3.org/community/locadd/wiki/LOCN_extension:_Metadata>`__ .
                  See also: `How should dct:spatial and dct:Location be used? <https://joinup.ec.europa.eu/release/how-should-dctspatial-and-dctlocation-be-used>`__                                |

    .. code-block:: xml
      :caption: dct:spatial

       <dct:spatial rdf:resource="http://publications.europa.eu/mdr/authority/country/ZWE"/>
       <dct:spatial>Bern</dct:spatial>
       <dct:spatial>
         <dct:Location>
           <locn:geometry rdf:datatype="https://www.iana.org/assignments/media-types/application/vnd.geo+json">
           <![CDATA[
             {
               "type":"Polygon",
               "crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},
               "coordinates":[[[-6.41736,55.7447],[2.05827,55.7447],[2.05827,49.8625],[-6.41736,49.8625],[-6.41736,55.7447]]]
             }
           ]]>
           </locn:geometry>
         </dct:Location>
       </dct.spatial>

.. container:: attribute

    dct:coverage 0..n

    :Type: ``dct:LocationPeriodOrJurisdiction``
           \http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction
    :Mandatory: no
    :Cardinality: 0..n
    :Description: This field is currently not used,
                  use ``dct:spatial`` instead.

    .. code-block:: xml
      :caption: dct:coverage

       <dct:coverage/>

.. container:: attribute

    dcat:temporal 0..n

    :Type: ``dct:PeriodOfTime``
           https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-PeriodOfTime
    :Mandatory: no
    :Cardinality: 0..n
    :Description: One or more time period(s) that cover the dataset.
                  ``<schema:startDate>`` contains the start date,
                  ``<schema:endDate>`` contains the end date format for dates:
                  \http://www.w3.org/2001/XMLSchema#date

    .. code-block:: xml
      :caption: dct:temporal

       <dct:temporal>
           <dct:PeriodOfTime>
               <schema:startDate rdf:datatype="<http://www.w3.org/2001/XMLSchema#date">1905-03-01</schema:startDate>
               <schema:endDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2013-01-05</schema:endDate>
           </dct:PeriodOfTime>
       </dct:temporal>

.. container:: attribute

    dct:accrualPeriodicity 0..n

    :Mandatory: no
    :Cardinality: 0..n
    :Attributes: - Name: ``rdf:resource``
                 - Type: ``dct:Frequency``
                 - Mandatory: yes
    :Description: The frequency in which this dataset is updated. Values for
                  ``dct:Frequency``: http://dublincore.org/groups/collections/frequency/

    .. code-block:: xml
      :caption: dct:accrualPeriodicity

       <dct:accrualPeriodicity rdf:resource="http://purl.org/cld/freq/daily"/>

.. container:: attribute

    rdfs:seeAlso 0..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no
    :Cardinality: 0..n
    :Attributes: - Name: ``rdf:resource``
                 - Type: ``dct:Frequency``
                 - Mandatory: yes
    :Description: Link to related datasets. Contains the identifier of the linked dataset.

    .. code-block:: xml
      :caption: rdfs:seeAlso

       <rdfs:seeAlso>326@swisstopo</rdfs:seeAlso>

.. container:: attribute

    **dcat:distribution** 1..n

    :Content: Contains single nested element of type ``dcat:Distribution``. See
              :ref:`Definition of dcat:Distribution <dcat-ap-ch-distribution>`.
    :Mandatory: yes
    :Cardinality: 1..n
    :Description: Wrapper for a distribution of the dataset

    .. code-block:: xml
      :caption: dcat:distribution

       <dcat:distribution>
           <dcat:Distribution rdf:about="http://swisstopo/325/ch.bafu.laerm-bahnlaerm_nacht">
               [Content of distribution]
           </dcat:Distribution>
       </dcat:distribution>
       [further distributions]

.. _dcat-ap-ch-distribution:

Distribution
------------

.. container:: attribute

    **dcat:Distribution** 1..1

    :Mandatory: yes
    :Cardinality: 1..1
    :Attributes: - Name: ``rdf:about``
                 - Content: Unique identifier for distribution
                 - Mandatory: yes
    :Description: A single distribution of the dataset

    .. code-block:: xml
      :caption: dcat:Distribution

       <dcat:Distribution rdf:about="http://swisstopo/325/ch.bafu.laerm-bahnlaerm_nacht">
           [Content of distribution]
       </dcat:Distribution>

.. container:: attribute

    dct:identifier 0..1

    :Type:       ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no
    :Cardinality: 0..1
    :Description: Identifier of the distribution in the source system

    .. code-block:: xml
      :caption: dct:identifier

      <dct:identifier>ch.bafu.laerm-bahnlaerm_nacht</dct:identifier>

.. container:: attribute

    dcat:title 0..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no - except if the distribution does not contain
                all the content of the dataset.
    :Cardinality: 0..n (one for each language)
    :Attributes: - Name: ``xml:lang``
                 - Content: ``en``, ``de``, ``fr``, ``it``
                 - Description: Language of the element
                 - Mandatory: yes
    :Description: The title of the distribution in the language defined
                  by the ``xml:lang?`` attribute. If this element is left out,
                  the ``dct:title`` of the dataset is used instead.

    .. code-block:: xml
      :caption: dcat:title

      <dct:title xml:lang="de">WMS (ch.bafu.laerm-bahnlaerm_nacht)</dct:title>

.. container:: attribute

    dct:description 0..n

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no - except if the distribution does not contain
                all the content of the dataset.
    :Cardinality: 0..n (one for each language)
    :Attributes: - Name: ``xml:lang``
                 - Content: ``en``, ``de``, ``fr``, ``it``
                 - Description: Language of the element
                 - Mandatory: yes
    :Description: Description of the distribution in the
                  language defined by the ``xml:lang?`` attribute.

    .. code-block:: xml
      :caption: dct:description

      <dct:title xml:lang="de">WMS (ch.bafu.laerm-bahnlaerm_nacht)</dct:title>

.. container:: attribute

    **dct:issued 0..1**

    :Type: Date and time in `ISO-8601 <https://en.wikipedia.org/wiki/ISO_8601>`__ format
    :Mandatory:  yes
    :Cardinality: 0..1
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#dateTime
                 - Description: Type of the field
                 - Mandatory: yes
    :Description: Date of the publication of this distribution

    .. code-block:: xml
      :caption: dct:issued

      <dct:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime"> 2013-05-11T00:00:00Z</dct:issued>

.. container:: attribute

    dct:modified 0..1

    :Type: Date and time in `ISO-8601 <https://en.wikipedia.org/wiki/ISO_8601>`__ format
    :Mandatory:  Only when the distribution has changed since the first
                 publication.
                 If this distribution was changed several times,
                 this corresponds to the date of the latest change.
    :Cardinality: 0..1
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#dateTime
                 - Description: Type of the field
                 - Mandatory: yes
    :Description: Date of the last change of the distribution

    .. code-block:: xml
      :caption: dct:modified

      <dct:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime"> 2015-04-26T00:00:00Z</dct:modified>

.. container:: attribute

    dct:language 0..n

    :Type: ``rdfs:Literal`` ISO 639-1 two-letter code
    :Content: ``en``, ``de``, ``fr``, ``it``
    :Mandatory: no
    :Cardinality: 0..n (for each language)
    :Description: Languages in which this distribution is available.
                  If the distribution is language-independant, this can
                  be left out.

    .. code-block:: xml
      :caption: dct:language

      <dct:language>de</dct:language>

.. container:: attribute

    **dcat:accessURL** 1..n

    :Type: \http://www.w3.org/2001/XMLSchema#anyURI
    :Mandatory: yes
    :Cardinality: 1..n
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#anyURI
                 - Description: Type of the field
                 - Mandatory: yes
    :Description: URL where the distribution can be found.
                  This could be either a download URL, an API URL or
                  a landing page URL. If the distribution is only
                  available through a landing page, this field must
                  contain the URL of the landing page. If a download
                  URL was given for this distribution, this field has
                  to contain the same value.

    .. code-block:: xml
      :caption: dcat:accessURL

      <dcat:accessURL rdf:datatype="http://www.w3.org/2001/XMLSchema#anyURI"> http://wms.geo.admin.ch/</dcat:accessURL>

.. container:: attribute

    dcat:downloadURL 0..1

    :Type: \https://www.w3.org/ns/dcat#downloadURL
    :Mandatory: no
    :Cardinality: 0..n
    :Attributes: - Name: ``rdf:datatype``
                 - Content: \http://www.w3.org/2001/XMLSchema#anyURI
                 - Description: Type of the field
                 - Mandatory: yes
    :Description: URL of a data file, if the distribution can be downloaded.
                  For each of these, a ``dcat:accessURL`` has to exist.

    .. code-block:: xml
      :caption: dcat:downloadURL

      <dcat:downloadURL rdf:datatype="http://www.w3.org/2001/XMLSchema"> http://data.geo.admin.ch.s3.amazonaws.com/ch.fill/data.zip</dcat:downloadURL>

.. container:: attribute

    **dct:rights** 1..1

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Content:
              - NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired (acceptable for opendata.swiss, Open Definition compliant)
              - NonCommercialAllowed-CommercialAllowed-ReferenceRequired (acceptable for opendata.swiss, Open Definition compliant)
              - NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired (acceptable for opendata.swiss)
              - NonCommercialAllowed-CommercialWithPermission-ReferenceRequired (acceptable for opendata.swiss)
              - NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
              - NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired (not acceptable for opendata.swiss)
              - NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired (not acceptable for opendata.swiss)

    :Mandatory: yes
    :Cardinality: 1..1
    :Description: Rights statement of this distribution. This is composed of 3
                  elements that can be summarized in a string literal:
                  - Non-commercial use: allowed or not allowed
                  - Commercial use: allowed, allowed with permission and not allowed
                  - Reference: required or not required
                  For each of these, a ``dcat:accessURL`` has to exist.

    .. code-block:: xml
      :caption: rdfs:seeAlso

      <dct:rights>NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired</dct:rights>

.. container:: attribute

    dct:license 0..1

    :Type: ``dct:LicenseDocument``
    :Mandatory: no
    :Cardinality: 0..1
    :Description: Not used, see ``dct:rights``. This field ensures compatibility
                  to other metadata standards.

    .. code-block:: xml
      :caption: dct:license

      <dct:license/>

.. container:: attribute

    dcat:byteSize 0..1

    :Type: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
    :Mandatory: no - except if the distribution is available as a
                data download (see ``downloadURL``).
    :Cardinality: 0..1
    :Description: Size of the data in bytes

    .. code-block:: xml
      :caption: dcat:byteSize

      <dcat:byteSize>1024</dcat:byteSize>

.. container:: attribute

    dcat:mediaType 0..1

    :Type: ``dct:MediaTypeOrExtent``
           http://www.iana.org/assignments/media-types/media-types.xhtml
    :Mandatory: no - except if the distribution is available
                as a data download (see ``downloadURL``).
    :Cardinality: 0..1
    :Description: This value will be used to display the ressource-format
                  if the downloadURL is empty. Only values from the list
                  of IANA MIME types
                  http://www.iana.org/assignments/media-types/media-types.xhtml

    .. code-block:: xml
      :caption: dcat:mediaType

      <dcat:mediaType>text/html</dcat:mediaType>

.. container:: attribute

    dct:format 0..1

    :Type: ``dct:MediaTypeOrExtent``
    :Mandatory: no
    :Cardinality: 0..1
    :Description: If neither the ``downloadURL``
                  nor the ``mediaType`` provide a
                  valid format this value is used
                  to display the format of the ressource.

    .. code-block:: xml
      :caption: dct:format

      <dct:format/>

.. container:: attribute

    dct:coverage 0..n

    :Type: ``dct:LocationPeriodOrJurisdiction``
           https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-LocationPeriodOrJurisdiction
    :Mandatory: no
    :Cardinality: 0..n
    :Description: Distributions can be classified by their location
                  or time period (for example, one for each canton,
                  one for each year, etc.)

    .. code-block:: xml
      :caption: dct:coverage

      <dct:coverage/>
