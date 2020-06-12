.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Publizieren <../publizieren>` :fa:`chevron-right`
   - :doc:`Publikationsvariante <../publikationsvariante>` :fa:`chevron-right`
   - Harvester

*********************************
Metadaten mit Harvester hochladen
*********************************

Wie lade ich meine Metadaten mittels Harvester hoch?
====================================================

.. container:: Intro

    Mit einem Harvester lassen sich grössere Datenmengen einfach und schnell publizieren.
    Es bedeutet, dass Ihre Datasets automatisch durch opendata.swiss angezogen und
    aktualisiert werden können, der Aufwand für die :doc:`Datenpflege <../../pflegen/pflegen>`
    reduziert sich für Sie. Voraussetzung dafür ist, dass
    :doc:`Ihre Organisation mitsamt Benutzerinnen und Benutzern registriert ist <../erstpublizierende/kontakt-bfs>`.
    Dies erfolgt in Absprache mit der Geschäftsstelle OGD. Wir erklären Ihnen hier,
    wie das sogenannte Harvesting funktioniert.

Die Schritte auf einen Blick
-----------------------------

- :ref:`Harvester einrichten <harvesting-katalog-endpunkt>`
- :ref:`Katalog-Endpunkt übergeben <harvesting-katalog-endpunkt>`
- :ref:`Katalog-Endpunkt mit Paginierung übergeben <harvesting-paginierung>`
- :ref:`Harvesting testen <harvesting-testen>`
- :ref:`Datenkatalog veröffentlichen <harvesting-veroeffentlichen>`

.. admonition:: Gut zu wissen

    Sollten Sie zum ersten Mal Daten publizieren, führen wir Sie durch den
    Prozess und unterstützen Sie dabei, die korrekte Übermittlung und Darstellung
    Ihrer Daten sicherzustellen, unabhängig von der Publikationsvariante.

Alle Schritte im Detail
------------------------

.. _harvesting-einrichten:

Harvester einrichten
--------------------

Wenn Sie Ihre Daten im :doc:`Standard DCAT-AP-CH <../../glossar/bibliothek/dcat-ap-ch>`
bereitstellen können, übernehmen wir das Einrichten des Harvesters
für Sie. Sie müssen nichts weiter tun, als uns die
URL mit dem :term:`Katalog-Endpunkt <Katalog Endpunkt (Catalogue endpoint)>`
zu übermitteln.
In speziellen Fällen, zum Beispiel wenn ein Datenkatalog nicht im DCAT-AP-CH Standard
geliefert werden kann, kann ein spezifisches Mapping definiert werden.
`Bitte kontaktieren Sie uns hierfür <mailto:opendata@bfs.admin.ch>`__.

.. admonition:: Gut zu wissen

    Pro Organisation wird jeweils ein Endpunkt für das Harvesten benötigt.
    Falls Sie also Daten von mehreren Organisationen verwalten,
    benötigen wir auch mehrere Endpunkte. Beachten Sie beim Vorbereiten
    Ihres Datenkatalogs die besondere Struktur des Dataset-Identifiers,
    die im
    :doc:`Standard DCAT-AP-CH (Link, englisch) <../../glossar/bibliothek/dcat-ap-ch>`
    beschrieben ist und für jede Organisation individuell ist.

.. _harvesting-katalog-endpunkt:

Katalog-Endpunkt übergeben
--------------------------

`Senden Sie uns hierfür eine E-Mail <mailto:opendata@bfs.admin.ch>`__ mit der URL,
unter der wir Ihren Datenkatalog herunterladen können.
Diese URL ist gleichzeitig ein RDF-Endpunkt.

.. container:: important

    Wichtig: Der Datenkatalog muss im Format
    :doc:`DCAT-AP-CH <../../glossar/bibliothek/dcat-ap-ch>` vorliegen.

.. _harvesting-paginierung:

Katalog-Endpunkt mit Paginierung übergeben
------------------------------------------

.. code-block:: xml

  <hydra:PagedCollection rdf:about="http://opendata.swiss/catalog.xml?page=3">
    <hydra:lastPage>http://opendata.swiss/catalog.xml?page=4</hydra:lastPage>
    <hydra:itemsPerPage rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1000</hydra:itemsPerPage>
    <hydra:totalItems rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">3479</hydra:totalItems>
    <hydra:firstPage>http://opendata.swiss/catalog.xml?page=1</hydra:firstPage>
    <hydra:previousPage>http://opendata.swiss/catalog.xml?page=2</hydra:previousPage>
  </hydra:PagedCollection>

Falls Ihr Datenkatalog zu gross ist und nicht in einer einzigen
Anfrage übermittelt werden kann, besteht die Möglichkeit,
ihn seitenweise zu übergeben. Dafür empfehlen wir die Paginierung
mit dem `Hydra Vocabulary <https://www.hydra-cg.com/spec/latest/core/>`__
zu implementieren. `Senden Sie uns abschliessend eine E-Mail <mailto:opendata@bfs.admin.ch>`__
mit der entsprechenden URL.

.. _harvesting-testen:

Harvesting testen
-----------------

Das Harvesting von Datasets im DCAT-AP-CH Standard wird von uns für Sie getestet.
Nachdem wir Ihre URL erhalten und den Harvester eingerichtet haben,
lassen wir ihn auf Ihrem Endpunkt in der Abnahmeumgebung laufen.
Bei allfälligen Fehlern melden wir uns bei Ihnen, sodass Sie diese an
Ihrem Katalog-Endpunkt korrigieren können.
`Geben Sie uns Bescheid <mailto:opendata@bfs.admin.ch>`__,
sobald die Fehler behoben sind und schon beginnt unser nächster Testlauf.
Bitte beachten Sie, dass die Daten, die per Harvesting importiert werden,
nicht im Backend angezeigt werden.

.. _harvesting-veroeffentlichen:

Datenkatalog veröffentlichen
----------------------------

.. figure:: ../../../_static/images/publizieren/harvesting-frontend-check.png
   :alt: xml hochladen

Nach einer abschliessenden Prüfung Ihrer Datasets richten wir das Harvesting
für Sie in der Produktionsumgebung ein.
`Kontaktieren Sie uns <mailto:opendata@bfs.admin.ch>`__,
um das Go-Live gemeinsam zu planen.

.. figure:: ../../../_static/images/publizieren/xm-hochladen-frontend.png
   :alt: xml hochladen

.. container:: bildunterschrift

   Beispielansicht eines publizierten Datasets

.. container:: support

   Support

Sie haben eine Frage zum Harvester?
`Schreiben Sie uns <mailto:opendata@bfs.admin.ch>`__
und wir helfen Ihnen gerne weiter.

.. container:: materialien

   Mehr zum Thema

- :doc:`DCAT-AP-CH (Link, englisch) <../../glossar/bibliothek/dcat-ap-ch>` – Beschreibung des aktuell von opendata.swiss genutzte Datenstandards DCAT-AP-CH
