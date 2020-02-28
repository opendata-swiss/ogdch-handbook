.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Publizieren <../publizieren>` :fa:`chevron-right`
   - :doc:`Publikationsvariante <../publikationsvariante>` :fa:`chevron-right`
   - Manuell erfassen

**************************
Metadaten manuell erfassen
**************************

Wie erfasse ich Metadaten manuell im Webformular?
=================================================

.. container:: Intro

    Hier ist der Name Programm: Bei der manuellen Datenerfassung geben Sie
    selbst Ihre Metadaten im Webformular von opendata.swiss ein. Hier erklären
    wir Ihnen Schritt für Schritt, wie Sie das Formular ausfüllen müssen.

Die Schritte auf einen Blick
----------------------------

- :ref:`Datensatz erstellen <manuell-datensatz-erstellen>`
- :ref:`Metadaten eingeben <manuell-resource-hinzufuegen>`
- :ref:`Ressourcen hinzufügen <manuell-resource-hinzufuegen>`
- :ref:`Schlagwörter definieren <manuell-schlagwoerter-definieren>`
- :ref:`Vorschau des Datensatz prüfen <manuell-vorschau-pruefen>`
- :ref:`Datensatz veröffentlichen <manuell-datensatz-veroeffentlichen>`


.. figure:: ../../../_static/images/publizieren/dataset-frontend.png
   :alt: Screenshot

.. container:: bildunterschrift

   Beispielansicht eines publizierten Datensatzes

.. figure:: ../../../_static/images/publizieren/resource-frontend.png
   :alt: Screenshot

.. container:: bildunterschrift

   Beispielansicht einer publizierten Ressource

Alle Schritte im Detail
-----------------------

.. _manuell-datensatz-erstellen:

Datensatz erstellen
-------------------

.. figure:: ../../../_static/images/publizieren/dataset-webformular.png
   :alt: Webformular von opendata.swiss für einen Datensatz

Loggen Sie sich in die
`Abnahme-Plattform <http://ogdch-abnahme.clients.liip.ch/de>`__  ein. Klicken Sie
dort via “Datensätze” auf “Datensatz erstellen” im Backend von opendata.swiss.
Als erstes müssen Sie Ihrem Datensatz einen Titel geben. Aus ihm wird
der Permalink des Datensatzes gebildet.

**Wichtig:** Verändern Sie diesen Titel und den Permalink nicht mehr,
nachdem der Datensatz publiziert wurde.

Metadaten eingeben
^^^^^^^^^^^^^^^^^^

Die Metadaten umfassen die Bereiche Datensatz-Informationen, Daten,
Publisher-Informationen und Weitere Informationen. Zunächst müssen
Sie den so genannten Identifier eingeben. Dieser sorgt dafür, dass
der Datensatz mit Ihrer Organisation verknüpft wird. Dafür können
Sie die ID aus Ihrem Quellsystem verwenden.
Wenn Sie mit mehreren Organisationen bei opendata.swiss angemeldet
sind, wählen Sie bitte die richtige Organisation aus.

**Wichtig:** Verändern Sie den Identifier nicht mehr, nachdem der
Datensatz publiziert ist!

.. figure:: ../../../_static/images/publizieren/dataset-identifier.png
   :alt: dataset identifier

Datensatz-Informationen
^^^^^^^^^^^^^^^^^^^^^^^
Bitte geben Sie hier den Titel und die Beschreibung Ihres Datensatzes
in mindestens einer Sprache ein, wünschenswert wären allerdings alle
vier Sprachen. Ein kostenloses Online-Übersetzungstool kann bei der
Übersetzung helfen. Falls nur eine Sprache vorliegt, wird die Eingabe
für alle anderen Sprachversionen übernommen.

.. figure:: ../../../_static/images/publizieren/dataset-information.png
   :alt: dataset information

Daten
^^^^^
Hier gilt es das Pflichtfeld “Erstellt” auszufüllen.
Damit ist das Datum der ersten Publikation dieses Datensatzes gemeint.
Falls dies nicht bekannt ist, verwenden Sie das Datum der ersten Publikation
auf opendata.swiss. Ausserdem können Sie hier noch das Datum der
letzten Änderung angeben (“geändert”), das Intervall, in dem
Aktualisierungen vorgenommen werden (“Aktualisierungsintervall”)
und den Zeitraum, den der Datensatz umfasst (“Zeitliche Abdeckung”).

.. figure:: ../../../_static/images/publizieren/dataset-daten.png
   :alt: daten

Publisher-Informationen
^^^^^^^^^^^^^^^^^^^^^^^
Hier müssen Sie Angaben zu Ihnen als Datenpublizierende eingeben.
Im Pflichtfeld “Publisher” wählen Sie die verantwortliche Organisation
für den Datensatz aus. Dies können auch mehrere Organisationen sein,
jedoch keine Personen. Im Pflichtfeld “Kontaktstellen” muss eine
Ansprechperson angegeben werden, die von Datennutzenden bei Rückfragen
kontaktiert werden darf. Es ist mindestens eine Person mit E-Mail-Adresse
erforderlich.

.. figure:: ../../../_static/images/publizieren/dataset-publisher.png
   :alt: publisher

Weitere Informationen
^^^^^^^^^^^^^^^^^^^^^
Diese Informationen können, müssen Sie aber nicht angeben.
Unter “Kategorien” können Sie eine oder mehrere thematische
Kategorien auswählen, denen der Datensatz zugeordnet werden kann.
Mit “Landing Page” ist die Website gemeint, auf der die Daten ursprünglich
publiziert wurden. Unter “Beziehungen” können Sie… lorem ipsum.
Unter “Verwandte Datensätze” können Sie aus allen verfügbaren Datensätzen
auf opendata.swiss mit thematischem Bezug zu Ihrem aktuellen Datensatz
auswählen.

.. figure:: ../../../_static/images/publizieren/dataset-kategorien.png
   :alt: kategorien

.. _manuell-resource-hinzufuegen:

Ressourcen hinzufügen
---------------------

.. figure:: ../../../_static/images/publizieren/webformular-resourcen.png
   :alt: resource

.. figure:: ../../../_static/images/publizieren/resource-nutzungsbedingungen.png
   :alt: resource ab nutzungsbedingungen

Das Erfassen einer Ressource funktioniert ähnlich wie zuvor beim
gesamten Datensatz. Wählen Sie einen geeigneten Identifier aus Ihrem
Quellsystem aus, legen Sie Titel und Beschreibung in mindestens einer
Sprache fest. Falls die Ressource sprachunabhängig ist, wählen Sie
unter “Sprache” keine Sprache aus. Auch hier müssen Sie unter dem
Pflichtfeld “Erstellt” das Datum der Veröffentlichung der Ressource angeben.

**Wichtig:** Unter “Nutzungsbedingungen” müssen Sie nun hier die
Bedingung auswählen, die Sie im Kapitel
:doc:`“Rechtliche Nutzung prüfen” <../../vorbereiten/datensatz/rechtlicher-und-nutzungs-check>`
ermittelt haben.**


Optional können Sie noch unter “Zugangs-URL” eine URL angeben,
über welche auf die Ressource
zugegriffen werden kann. Falls sich hinter der URL ein Download
verbirgt, muss die URL auch im Feld “Download-URL” eingetragen werden.
Ebenfalls optional kann die “Grösse” der Ressource angegeben werden.
:doc:`technischen Anforderungen <../../vorbereiten/datensatz/technischer-check>`

**Wichtig:** Unter “Format” können Sie das Format Ihrer Ressource auswählen,
das den :doc:`technischen Anforderungen <../../vorbereiten/datensatz/technischer-check>`
von opendata.swiss entspricht.

.. _manuell-schlagwoerter-definieren:

Schlagwörter definieren
------------------------
Ganz oben im Webformular haben Sie noch die Möglichkeit ein oder mehrere
Schlagwörter zum Datensatz anzugeben, getrennt durch Kommas. Alternativ
können Sie auch aus den meistgenutzten Schlagwörtern auswählen. Auch hier
gilt: Bitte geben Sie die Schlagwörter in mindestens einer Sprache an.

.. figure:: ../../../_static/images/publizieren/dataset-schlagworte.png
   :alt: dataset schlagworte
   :width: 50%

.. _manuell-vorschau-pruefen:

Vorschau des Datensatz prüfen
------------------------------

.. figure:: ../../../_static/images/publizieren/dataset-preview.png
   :alt: Screenshot

Abschliessend können Sie sich eine Vorschau Ihres Datensatzes anzeigen
lassen. Dafür klicken Sie oben in der Menüleiste auf “Datensatz anzeigen”.
Sieht alles so aus wie in unserer Beispielansicht, kann der Datensatz
veröffentlicht werden.

.. _manuell-datensatz-veroeffentlichen:

Datensatz speichern
--------------------

Status Geben Sie den Status des Datensatzes an:
Entwurf: Sie bearbeiten die Metadaten des Datensatzes weiter.
Veröffentlicht: Der Datensatz ist auf opendata.swiss publiziert.
Veröffentlichen / Aktualisieren
Sofort veröffentlichen: Publizieren Sie den Datensatz mit einem Klick auf die Schaltfläche ‘Veröffentlichen’.
Veröffentlichung planen: Nutzen Sie die Datums- und Zeitangabe, um die Veröffentlichung eines Datensatzes in der Zukunft zu festzulegen und klicken Sie auf die Schaltfläche ‘Planen’. Die Veröffentlichung lässt sich verlässlich auf ein bestimmtes Datum planen; die Festlegung einer Uhrzeit kann um ± 1 Stunde von der effektiven Publikation abweichen.
Aktualisieren: Haben Sie Metadaten eines Datensatzes bearbeitet, der bereits publiziert ist, publizieren Sie Ihre Änderungen mit einem Klick auf die Schaltfläche ‘Aktualisieren’.

.. figure:: ../../../_static/images/publizieren/dataset-aktualisieren.png
   :alt: dataset aktualisieren
   :width: 50%

.. container:: support

   Support

Sie haben eine Frage zum manuelle Erfassen Ihres Datensatzes?
`Schreiben Sie uns <mailto:opendata@bfs.admin.ch>`__ und wir
helfen Ihnen gerne weiter.
