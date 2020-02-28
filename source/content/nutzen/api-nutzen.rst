.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../index>` :fa:`chevron-right`
   - :doc:`Nutzen <nutzen>` :fa:`chevron-right`
   - API nutzen

**********
API nutzen
**********

Wie programmiere ich in Applikationen den Zugriff auf die Daten von opendata.swiss?
===================================================================================

.. container:: Intro

    opendata.swiss basiert auf dem Open-Source-Projekt `CKAN <https://ckan.org>`__ .
    CKAN stellt eine
    umfangreiche API für die Metadaten des offenen Datenkatalogs zur Verfügung,
    die Applikationsentwickler nutzen können. In diesem Kapitel erklären wir
    Ihnen, wie Sie mittels API auf die Daten von opendata.swiss zugreifen können.
    Werfen Sie auch einen Blick auf
    aktuelle `Anwendungen <https://opendata.swiss/de/app/>`__.

.. _api-nutzen-ckan-api:

Nutzung der API – so funktioniert’s
-----------------------------------

Hier geben wir Ihnen eine kurze Einführung über API-Zugriffe auf opendata.swiss,
für den vollen Umfang an Möglichkeiten des API lesen Sie bitte in der
`CKAN API-Dokumentation <https://docs.ckan.org/en/latest/api/>`__ nach.

- :ref:`Zugriffsmöglichkeiten <api-nutzen-zugriffsmoeglichkeiten>`
- :ref:`Action-Api <api-nutzen-action-api>`
- :ref:`Terminologie <api-nutzen-terminologie>`
- :ref:`Beispiele <api-nutzen-beispiele>`

.. _api-nutzen-zugriffsmoeglichkeiten:

Zugriffsmöglichkeiten
^^^^^^^^^^^^^^^^^^^^^

CKAN beschreibt in seiner Dokumentation drei Zugriffsarten, die Ihnen bei opendata.swiss
dann ebenfalls zur Verfügung stehen:

.. code-block::
   :caption: Api Zugriff über den Browser

   https://opendata.swiss/api/3/action/package_search?fq=tags:economy

.. code-block::
   :caption: API Zugriffe über die Kommandozeile, etwa mit Curl

   curl 'https://opendata.swiss/api/3/action/package_search?fq=tags:economy'

.. code-block::
   :caption: API Zugriffe über das CKAN Werkzeug `ckanapi <https://github.com/ckan/ckanapi>`__

    ckanapi -r https://opendata.swiss action package_search fq='tags:economy'

.. _api-nutzen-action-api:

Action-API
^^^^^^^^^^

Wenn Sie diese Zugriffe ansehen fällt Ihnen vielleicht auf, dass hier überall das
Wort ``action`` vorkommt. Fast alles was sich in CKAN mit Daten
anstellen lässt ist als ``action`` programmiert es kann
über das API angestossen werden. Genaueres dazu lesen Sie am besten im
`Action-API von CKAN <https://docs.ckan.org/en/latest/api/#action-api-reference>`__. nach.

.. _api-nutzen-terminologie:

Terminologie von CKAN in opendata.swiss
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Alle Objekte von opendata.swiss sind auch in CKAN vertreten.
Für Ihre API-Zugriffe müssen Sie wissen, mit welcher Terminologie
Sie welche Einheiten in opendata.swiss erreichen können. Die
folgende Liste enthält diese Entsprechungen:

``package``, ``dataset``
   entspricht einem :term:`dataset <Datensatz>` bei opendata.swiss: das sind die Metadaten
   zu einem Bündel von Resourcen
``resource``
   entspricht einer Resource bei Opendata.swiss. Opendata.swiss hostet
   selbst keinen Resourcen. Stellt aber ``downloadUrls`` oder ``accesssUrls``
   und eventuell sogar Datenpreviews zur Verfügung
``group``
   in opendata.swiss sind das die Kategorien. Ein dataset kann mehreren
   Kategorien angehören.
``organization``
   die datenpublizierende Stelle. Jedes Dataset wird von genau einer
   Organisation publiziert.
``id``
   damit ist im api der :term:`slug` des Datensatzes gemeint

.. _api-nutzen-beispiele:

Beispiele
^^^^^^^^^^

- Auflisten von Datasets

.. code-block:: bash
   :caption: package_list: auflisten aller datasets

   curl 'https://opendata.swiss/api/3/action/package_list'

- Anzeigen eines einzelnen Datasets

.. code-block:: bash
   :caption: package_show, id: anzeigen eines einzelnen datasets

   curl 'https://opendata.swiss/api/3/action/package_show?id=studierende-fachhochschule-anz'

- Suchen der Datasets zu einem bestimmten Schlagwort:

.. code-block:: 
   :caption: package_search, q, fq: Schlagwortsuche in den Datasets

   curl https://opendata.swiss/api/3/action/package_search?q=switzerland&fq=+keywords_en:geology'

Die Suchsyntax dabei entspricht Apache Lucene, da CKAN Solr als Suchmaschine benutzt und
ist ebenfalls in der
`CKAN-Dokumentation <https://docs.ckan.org/en/latest/user-guide.html#search-in-detail>`__
ausführlich beschrieben

Fetch-API
---------

Es ist auch möglich über ein
`Fetch-API <https://developers.google.com/web/updates/2015/03/introduction-to-fetch>`__
auf opendata.swiss zuzugreifen.

.. _api-nutzen-fragen:

Was ist wenn ich Rückfragen zu einem Datensatz habe?
----------------------------------------------------
Haben Sie Fragen zu unserer AP?
Dann `nehmen Sie mit uns Kontakt auf <mailto:opendata@bfs.admin.ch>`__.
Bei Fragen zu einzelnen Datensätzen, wenden Sie sich direkt an die Datenpublizierenden.
Ihre Kontaktangaben finden Sie jeweils jeweils im Datensatz unter “Zusätzliche Information”.

.. container:: materialien

    Mehr zum Thema

- `CKAN-API-Guide <https://docs.ckan.org/en/latest/api/#action-api-reference>`__  –
  Guidelines zur Nutzung der CKAN API
