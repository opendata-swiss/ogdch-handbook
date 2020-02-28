.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Publizieren <../publizieren>` :fa:`chevron-right`
   - :doc:`Publikationsvariante <../publikationsvariante>` :fa:`chevron-right`
   - Manuelle Datenerfassung

************************************
Metadaten als XML importieren
************************************

Wie importiere ich meine Metadaten als XML-Datei?
=================================================

.. container:: Intro

    Wenn Sie mehr als 10 Datensätze importieren möchten, die regelmässig
    aktualisiert werden müssen, bietet sich der Import als XML-Datei an.
    Wir zeigen Ihnen hier Schritt für Schritt, wie das funktioniert.

Die Schritte auf einen Blick
--------------------------------------------

- :ref:`Datenkatalog importieren <xml_datenkatalog_hochladen>`
- :ref:`Datensätze prüfen und freischalten <xml_datensaetze_pruefen>`
- :ref:`Schlagworte kontrollieren <xml_schlagworte_pruefen>`
- :ref:`Ergebnis im Frontend ansehen <xml_datensaetze_ansehen>`

.. figure:: ../../../_static/images/publizieren/xm-hochladen-frontend.png
   :alt: xml hochladen

.. container:: bildunterschrift

   Beispielansicht eines publizierten Datensatzes

Alle Schritte im Detail
-----------------------

.. _xml_datenkatalog_hochladen:

Datenkatalog importieren
------------------------

.. figure:: ../../../_static/images/publizieren/xml-hochladen-upload.png
   :alt: xml hochladen

Loggen Sie sich auf der
`Abnahme-Umgebung <http://ogdch-abnahme.clients.liip.ch/de>`__ ein und klicken Sie auf das
Feld “Datensätze importieren”. In der Upload-Maske können Sie Ihren
Datenkatalog als XML-Datei von Ihrem PC auswählen und hochladen.

**Wichtig:** Der Datenkatalog muss im Format
:doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>` vorliegen.


.. _xml_datensaetze_pruefen:

Datensätze prüfen
------------------

.. figure:: ../../../_static/images/publizieren/xml-hochladen-fehler-nach-import.png
   :alt: xml hochladen

Ihre Datensätze werden Ihnen nach erfolgreichem Import direkt
angezeigt (grüne Erfolgsmeldung). Sie erscheinen ausserdem auch
unter “Alle Datensätze”. Sollte sich noch ein Fehler im Datensatz befinden,
wird Ihnen dies schon hier angezeigt (rote Error-Meldung). Allfällige Fehler
können Sie dann im Datensatz selbst korrigieren.

Fehlermeldung
-------------

Bei allfälligen Fehlern erscheint eine Fehlermeldung, der Status ist rot.
Bitte korrigieren Sie die markierten Felder im jeweiligen Datensatz. Sobald Sie
alle Fehler behoben haben, stellt der Status auf grün. Nun können Sie Ihren
Datensatz publizieren.

.. figure:: ../../../_static/images/publizieren/xml-hochladen-dataset-nok.png
   :alt: xml hochladen

.. figure:: ../../../_static/images/publizieren/xml-hochladen-dataset-ok.png
   :alt: xml hochladen

.. _xml_schlagworte_pruefen:

Schlagworte kontrollieren
-------------------------

Beim Import werden automatisch Schlagwörter für Ihren Datensatz
ausgewählt. Kontrollieren Sie diese und fügen bei Bedarf
noch weitere Schlagwörter hinzu.

.. figure:: ../../../_static/images/publizieren/xml-hochladen-schlagworte.png
   :alt: xml hochladen
   :width: 50%

.. _xml_datensaetze_ansehen:

Vorschau des Datensatz prüfen
------------------------------

.. figure:: ../../../_static/images/publizieren/xml-hochladen-dataset-preview.png
   :alt: xml hochladen

Nachdem Sie alle Fehler korrigiert und Schlagwörter überprüft haben, können
Sie sich eine Vorschau Ihres Datensatzes anzeigen lassen. Dafür klicken Sie
oben in der Menüleiste auf “Datensatz anzeigen”. Sieht alles so aus wie in
unserer Beispielansicht, kann der Datensatz veröffentlicht werden.

.. container:: support

   Support

Sie haben eine Frage zum Import Ihres Datensatzes als XML?
Schreiben Sie uns `Schreiben Sie uns <mailto:opendata@bfs.admin.ch>`__
und wir helfen Ihnen gerne weiter.

.. container:: materialien

    Mehr zum Thema

- :doc:`DCAT-AP-CH <../../glossar/standards/dcat-mapping>` – Beschreibung des
  aktuell von opendata.swiss genutzte Datenstandards DCAT-AP-CH

