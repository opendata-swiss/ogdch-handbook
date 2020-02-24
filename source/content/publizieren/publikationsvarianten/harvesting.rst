.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Publizieren <../publizieren>` :fa:`chevron-right`
   - :doc:`Publikationsvariante <../publikationsvariante>` :fa:`chevron-right`
   - Harvester

************************************
Metadaten mit Harvester hochladen
************************************

Wie lade ich meine Metadaten mittels Harvesters hoch?
======================================================


.. container:: Intro

    Mit einem Harvester lassen sich grössere Datenmengen einfach und schnell
    publizieren. Es bedeutet, dass Ihre Datensätze automatisch durch opendata.swiss
    angezogen und aktualisiert werden können, der Aufwand für die
    :doc:`Datenpflege <../../pflegen/pflegen>`
    reduziert sich für Sie. Wir erklären Ihnen hier,
    wie das sogenannte Harvesting funktioniert.

Die Schritte auf einen Blick
-----------------------------

- :ref:`Harvester einrichten <harvesting-katalog-endpunkt>`
- :ref:`Katalog-Endpunkt übergeben <harvesting-katalog-endpunkt>`
- :ref:`Katalog-Endpunkt mit Paginierung übergeben <harvesting-paginierung>`
- :ref:`Harvesting testen <harvesting-testen>`
- :ref:`Vorschau des Datensatz prüfen <harvesting-vorschau>`

.. figure:: ../../../_static/images/publizieren/xm-hochladen-frontend.png
   :alt: xml hochladen

.. container:: bildunterschrift

   Beispielansicht eines publizierten Datensatzes

Alle Schritte im Detail
------------------------

.. _harvesting-einrichten:

Harvester einrichten
-----------------------

Das Einrichten des Harvesters übernehmen wir für Sie.
Sie müssen nichts weiter tun, als uns die URL mit dem Katalog-Endpunkt
zu übermitteln. Je besser Sie Ihre Endpunkt vorbereitet und an den
Standard  :doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>`
angepasst haben, desto schneller wird der Harvester Ihre Daten importieren können.

.. admonition:: Gut zu wissen

    Pro Organisation wird jeweils ein Endpunkt für das Harvesten
    benötigt. Falls Sie also Daten von mehreren Organisationen verwalten,
    benötigen wir auch mehrere Endpunkte. Beachten Sie beim Vorbereiten
    Ihres Datenkatalogs die besondere Struktur des
    ``dcat:identifier``, die im
    Standard :doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>`
    beschrieben ist und für jede Organisation individuell ist.

.. _harvesting-katalog-endpunkt:

Katalog-Endpunkt übergeben
---------------------------

:email-to-bfs:`Senden Sie uns hierfür eine E-Mail <>` mit der URL,
unter der wir Ihren Datenkatalog herunterladen können.
Diese URL ist gleichzeitig ein RDF-Endpunkt.

**Wichtig:** Der Datenkatalog muss im Format
:doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>` vorliegen.

.. _harvesting-paginierung:

Katalog-Endpunkt mit Paginierung übergeben
--------------------------------------------

.. code-block:: xml

  <hydra:PagedCollection rdf:about="http://opendata.swiss/catalog.xml?page=3">
    <hydra:lastPage>http://opendata.swiss/catalog.xml?page=4</hydra:lastPage>
    <hydra:itemsPerPage rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1000</hydra:itemsPerPage>
    <hydra:totalItems rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">3479</hydra:totalItems>
    <hydra:firstPage>http://opendata.swiss/catalog.xml?page=1</hydra:firstPage>
    <hydra:previousPage>http://opendata.swiss/catalog.xml?page=2</hydra:previousPage>
  </hydra:PagedCollection>

Falls Ihr Datenkatalog zu gross ist und nicht in einer einzigen Anfrage
übermittelt werden kann, besteht die Möglichkeit, ihn seitenweise zu übergeben.
Dafür empfehlen wir die Paginierung mit dem
`Hydra Vocabulary <https://www.hydra-cg.com/spec/latest/core/>`__ zu
implementieren. :email-to-bfs:`Senden Sie uns abschliessend eine E-Mail <>`
mit der entsprechenden URL.

.. _harvesting-testen:

Harvesting testen
--------------------

Das Harvesting wird von uns für Sie getestet. Nachdem wir Ihre URL
erhalten und den Harvester eingerichtet haben, lassen wir ihn auf Ihrem
Endpunkt laufen. Bei allfälligen Fehlern melden wir uns bei Ihnen, sodass Sie
diese an Ihrem Katalog-Endpunkt korrigieren können.
:email-to-bfs:`Geben Sie uns Bescheid <>` , sobald die Fehler behoben
sind und schon beginnt unser nächster Testlauf.

.. _harvesting-vorschau:

Vorschau des Datensatz prüfen
------------------------------

.. figure:: ../../../_static/images/publizieren/harvesting-frontend-check.png
   :alt: xml hochladen

Im letzten Schritt kontrollieren Sie die Datensätze. Dafür loggen Sie sich
in die `Abnahme-Umgebung <http://ogdch-abnahme.clients.liip.ch/>`__ ein und
lassen sich unter “Organisation” mit nur einem Klick unter
“Organisation anzeigen” eine Vorschau der Seite anzeigen.
Nun können Sie alle Datensätze und Ressourcen überprüfen.

.. container:: support

   Support

Sie haben eine Frage zum Harvester?
:email-to-bfs:`Schreiben Sie uns <>`
und wir helfen Ihnen gerne weiter.

.. container:: materialien

   Mehr zum Thema

- :doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>` – Beschreibung des
  aktuell von opendata.swiss genutzte Datenstandards DCAT-AP-CH
