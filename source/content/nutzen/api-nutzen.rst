.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../index>` :fa:`chevron-right`
   - :doc:`Nutzen <nutzen>` :fa:`chevron-right`
   - opendata.swiss API nutzen

*************************
opendata.swiss API nutzen
*************************

Wie programmiere ich den Zugriff auf die Daten von opendata.swiss?
==================================================================

.. container:: Intro

   opendata.swiss basiert auf dem Open-Source-Projekt CKAN. CKAN stellt
   eine umfangreiche API für die Metadaten des offenen Datenkatalogs zur Verfügung,
   die Applikationsentwickler nutzen können. In diesem Kapitel erklären wir Ihnen,
   wie Sie mittels API auf die Daten von opendata.swiss zugreifen können. Werfen
   Sie auch einen Blick in
   `aktuelle Beispiele, wie OGD in Anwendungen genutzt wird <https://opendata.swiss/de/showcase/>`__.

Nutzung der API – so funktioniert’s
------------------------------------

- :ref:`Zugriffsmöglichkeiten <api-nutzen-zugriffsmoeglichkeiten>`
- :ref:`Action-API <api-nutzen-action-api>`
- :ref:`Terminologie <api-nutzen-terminologie>`
- :ref:`Beispiele <api-nutzen-beispiele>`

.. admonition:: Gut zu wissen

   Hier geben wir Ihnen eine kompakte Einführung zur Nutzung der API
   von opendata.swiss. Eine ausführliche Dokumentation zur CKAN API
   finden Sie in der
   `CKAN API Dokumentation <https://docs.ckan.org/en/latest/api/>`__.

.. _api-nutzen-zugriffsmoeglichkeiten:

Zugriffsmöglichkeiten
^^^^^^^^^^^^^^^^^^^^^

Es gibt 3 Zugriffsarten, die Ihnen bei opendata.swiss zur Verfügung stehen:

.. code-block::
   :caption: API Zugriff über den Browser

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

Alle Zugriffe verwenden das Wort «action», wie in den Beispielen
oben zu beobachten ist. Grundsätzlich sind die meisten Funktionen in
CKAN als «action» programmiert, sodass sie über die API angestossen werden
können. Mehr dazu lesen Sie im Abschnitt
`Action-API in der CKAN Dokumentation <https://docs.ckan.org/en/latest/api/#action-api-reference>`__.

.. _api-nutzen-terminologie:

Terminologie von CKAN in opendata.swiss
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Alle Objekte von opendata.swiss sind auch in CKAN vertreten. Damit der API-Zugriff reibungslos
funktioniert, erklären wir Ihnen in der folgenden Auflistung, mit welcher Terminologie Sie welche
Einheiten in opendata.swiss erreichen können:

``package``, ``dataset``
   Entspricht einem :term:`Dataset <Dataset>` bei opendata.swiss. Damit gemeint sind die Metadaten
   zu einem Bündel von Ressourcen.
``resource``
   Entspricht einer Ressource bei Opendata.swiss. Die Plattform opendata.swiss hostet
   selbst keinen Ressourcen, stellt aber «downloadUrls» oder «accesssUrls»
   und teilweise auch Daten Previews zur Verfügung.
   Ressourcen in CKAN entsprechen dcat:Distribution im :doc:`DCAT AP Standard <../glossar/bibliothek/dcat-ap-ch>`
``group``
   Entspricht einer Kategorie bei opendata.swiss. Ein Dataset kann mehreren Kategorien angehören.
``organization``
   Entspricht den Datenpublizierenden, egal ob Person oder Organisation.
   Jedes Dataset wird von genau einer Organisation publiziert.
``id``
   Entspricht im API dem :term:`Slug <Slug>` des Datasets.

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

Die Suchsyntax entspricht dabei Apache Lucene, da CKAN Solr als
Suchmaschine benutzt. Dies ist ebenfalls in der
`CKAN-Dokumentation <https://docs.ckan.org/en/latest/user-guide.html#search-in-detail>`__
ausführlich beschrieben.

Fetch-API
---------

Es ist auch möglich über
`Fetch-API <https://developers.google.com/web/updates/2015/03/introduction-to-fetch>`__
auf opendata.swiss zuzugreifen.

.. _api-nutzen-fragen:

.. container:: support

   Support

Noch Fragen?
------------

Haben Sie noch Fragen zur Nutzung unserer API? Dann
`nehmen Sie mit uns Kontakt auf <mailto:opendata(at)bfs.admin.ch>`__.
Bei Rückfragen zu einzelnen Datasets wenden Sie sich bitte direkt an die
Datenpublizierenden. Die jeweiligen Kontaktangaben finden
Sie im Dataset unter «Zusätzliche Information».

**Haben Sie ein interessantes Nutzungsbeispiel?** Wir würden uns
sehr freuen, davon zu erfahren und Ihr Projekt in unsere Galerie von
Beispielanwendungen aufzunehmen. `Schreiben Sie uns <mailto:opendata(at)bfs.admin.ch>`__.

.. container:: materialien

    Mehr zum Thema

- `CKAN-API-Guide (Link) <https://docs.ckan.org/en/latest/api/#action-api-reference>`__  – Guidelines zur Nutzung der CKAN API
