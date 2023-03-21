.. container:: custom-breadcrumbs

    - :fa:`home` :doc:`Handbuch <../../index>` :fa:`chevron-right`
    - :doc:`Nutzen <nutzen>` :fa:`chevron-right`
    - opendata.swiss API nutzen

*************************
opendata.swiss API nutzen
*************************

Wie nutze ich den API-Zugriff von opendata.swiss?
=================================================

.. container:: Intro

    Das Portal `opendata.swiss <https://opendata.swiss/>`__ basiert auf dem Open-Source-Projekt CKAN. 
    CKAN stellt eine umfangreiche API für die Metadaten des offenen Datenkatalogs 
    zur Verfügung, die Applikationsentwickler_innen nutzen können. 
    In diesem Kapitel erklären wir Ihnen, wie Sie mittels API auf die Daten von 
    opendata.swiss zugreifen können. Werfen Sie auch einen Blick in aktuelle 
    `Beispiele, wie OGD genutzt <https://opendata.swiss/showcase/>`__ wird.

.. admonition:: Gut zu wissen

    Hier geben wir Ihnen eine Einführung zur Nutzung der API von 
    `opendata.swiss <https://opendata.swiss/>`__. 
    Eine ausführliche Dokumentation zur CKAN API finden Sie in der `CKAN API 
    Dokumentation <https://docs.ckan.org/en/latest/api/>`__.


.. _api-nutzen-einführung:

Einführung
^^^^^^^^^^

Eine `API (Application Programming Interface 
<https://de.wikipedia.org/wiki/Programmierschnittstelle>`__) ermöglicht es, 
dass Software direkt mit einem externen System (in diesem Fall den Metadaten 
auf der Plattform opendata.swiss) interagiert. Während die Webseite der 
Plattform opendata.swiss und die `Suchfunktion 
<https://opendata.swiss/de/dataset>`__ auf die Nutzung durch Menschen 
ausgerichtet ist, bieten wir über die API eine Zugriffsmöglichkeit, die für die Automatisierung optimiert ist.


Nutzung der API – so funktioniert es
------------------------------------

- :ref:`Zugriffsmöglichkeiten <api-nutzen-zugriffsmoeglichkeiten>`
- :ref:`Action-API <api-nutzen-action-api>`
- :ref:`Beispiel API-Response <api-nutzen-beispiel-response>`
- :ref:`Terminologie <api-nutzen-terminologie>`
- :ref:`Beispiele <api-nutzen-beispiele>`



.. _api-nutzen-zugriffsmoeglichkeiten:

Zugriffsmöglichkeiten
^^^^^^^^^^^^^^^^^^^^^

Sie haben verschiedene Möglichkeiten, auf die API von opendata.swiss zuzugreifen: 

- via Browser, 
- über die Kommandozeile, oder durch 
- spezialisierte Werkzeuge wie ckanapi oder Fetch-API. 

Je nach Einsatzzweck eignen sich verschiedene Arten. Für den Zugriff über den Browser 
empfehlen wir die Nutzung eines JSON-Viewers (nativ oder Plug-In), um die Lesbarkeit 
der Informationen zu verbessern.

Die Basis-URL lautet *https://ckan.opendata.swiss/api/3/action/* und wird gefolgt von 
der Aktion und allfälligen notwendigen Zusatzinformationen.

..  code-block::
    :caption: API Zugriff über den Browser

    https://opendata.swiss/api/3/action/package_search?fq=tags:economy

.. code-block::
    :caption: API Zugriffe über die Kommandozeile, etwa mit cURL

    curl 'https://opendata.swiss/api/3/action/package_search?fq=tags:economy'

.. code-block::
    :caption: API Zugriffe über das CKAN Werkzeug `ckanapi <https://github.com/ckan/ckanapi>`__
   
    ckanapi -r https://opendata.swiss action package_search fq='tags:economy'

.. _api-nutzen-action-api:

Action-API
^^^^^^^^^^

Alle Zugriffe verwenden das Wort *action*, wie in den Beispielen oben zu beobachten 
ist. Grundsätzlich sind die meisten Funktionen in CKAN als *action* programmiert, 
so dass sie über die API angestossen werden können. 
Mehr dazu lesen Sie im Abschnitt `Action-API in der CKAN Dokumentation 
<https://docs.ckan.org/en/latest/api/#action-api-reference>`__.

Die Rückmeldung wird als `JSON Objekt <https://de.wikipedia.org/wiki/JavaScript_Object_Notation>`__ 
ausgegeben. Mehr über die Struktur von JSON Objekten erfahren Sie 
`hier <https://www.w3resource.com/JSON/structures.php>`__.

Zuerst wird Ihnen eine Adresse angezeigt, unter der Sie Hintergrundinformationen 
zu Ihrer Anfrage erhalten (*help*). Darauf meldet Ihnen das System, ob die Anfrage 
erfolgreich war (*success: true* oder *success: false*). Unter *result* finden 
Sie die Inhalte Ihrer angefragten Informationen.

.. _api-nutzen-beispiel-response:

Beispiel API Response
^^^^^^^^^^^^^^^^^^^^^

.. toggle-header::
    :header: JSON string

    .. code-block::
        
        {
        "help": "https://ckan.opendata.swiss/api/3/action/help_show?name=package_show", 
        "success": true, 
        "result": {
            "owner_org": "4309c328-c618-4077-bcdc-378a21ee1b46"
            "maintainer": "info@bfs.admin.ch", 
            "issued": "2023-03-01T00:00:00", 
            "title_for_slug": "csv-file-der-datensatze-auf-opendata-swiss", 
            "private": false, 
            "maintainer_email": "auskunftsdienst@bfs.admin.ch", 
            "num_tags": 9, 
            "contact_points": [
                {"email": "auskunftsdienst@bfs.admin.ch", 
                "name": "info@bfs.admin.ch"}
                ],
            "keywords": {
                "fr": [
                    "tableau", 
                    "bases-statistiques-et-generalites"
                    ],
                "de": [
                        "tabelle", 
                        "grundlagen-und-ubersichten"
                        ],
                "en": [
                        "statistical-basis-and-overviews", 
                        "table"
                    ], 
                "it": [
                        "tabella", 
                        "basi-statistiche-e-presentazioni-generali"
                    ]
                },
            "temporals": [], 
            "id": "380fbe1f-8ddb-4bbe-bdcf-68217cd42f09", 
            "metadata_created": "2023-03-01T09:36:26.218643", 
            "relationships_as_object": [], 
            "display_name": {
                "fr": "Fichier csv des jeux de donn\u00e9es sur opendata.swiss", 
                "en": "csv-file of the data sets on opendata.swiss", 
                "de": "csv-File der Datens\u00e4tze auf opendata.swiss", 
                "it": "File csv dei set di dati su opendata.swiss"}, 
            "metadata_modified": "2023-03-02T10:38:56.947322", 
            "author": null, 
            "author_email": null, 
            "relations": [{
                "url": "https://www.admin.ch/opc/de/classified-compilation/19920252/index.html", 
                "label": "legal_basis"}], 
            "state": "active"
            }
        }


\    

Eine API-Abfrage über den Browser liefert Ihnen als Beispiel folgende Informationen:

.. list-table:: Übersicht Angaben Dataset-Ebene
   :widths: 10 90
   :header-rows: 1

   * - Key
     - Value
   * - help
     - Unter der angegebenen Adresse finden Sie weitere Informationen zur Query.
   * - success
     - War Ihre Query richtig formuliert, so dass ein Ergebniss gefunden wurde? Falls *True* ausgegeben wird, aber eine leere Liste retourniert wird, war die Syntax Ihrer Anfrage korrekt formuliert, aber keine Datensätze entsprechen Ihren Parametern.
   * - result
     - Diese Datensätze entsprechen Ihrer Anfrage.
   * - issued
     - Das Erstelldatum des Datasets.
   * - title_for_slug
     - Inhalt entspricht dem Namen des Datasets.
   * - id
     - Die ID des Datasets.
   * - type
     - Der Typ des Datasets. Mögliche Typen sind dataset, harvester, showcase.
   * - description
     - Die Beschreibung des Datasets.
   * - groups
     - Die Kategorien, zu der das Dataset gehört.
   * - publisher
     - Die Stelle, welche das Dataset veröffentlicht hat. Inkl. name und url, etc.
   * - organization
     - Die dem Publisher übergeordnete Organisation, die für das Dataset inhaltlich verantwortlich ist. Inkl. Name, URL, Anzahl publizierter Datasets (i.e. package_count).
   * - name
     - Sprachunabhängiger Term, der für die API-Abfrage genutzt werden kann.
   * - accrual_periodicity
     - Angabe, wie häufig das Dataset aktualisiert wird. Kontrolliertes Vokabular gemäss Standard von data.europa.eu.
   * - resources
     - Eine Auflistung der Ressourcen, die zum Dataset gehören. Darin finden sich auch die entsprechenden Metadaten zu den Ressourcen.


.. list-table:: Übersicht Angaben Ressourcen-Ebene
   :widths: 10 90
   :header-rows: 1

   * - Key
     - Value
   * - package_id
     - Die ID des Datasets, zu dem die Ressourcen gehören.
   * - issued
     - Das Erstelldatum der Ressource.
   * - id
     - Die ID der Ressource.
   * - download_url
     - Die Adresse, unter der die Ressource heruntergeladen werden kann.
   * - media-type
     - Der Medientyp der Ressource.
   * - format
     - Das Format der Ressource.
   * - rights
     - Die Nutzungsbedingungen der Ressource.
   * - created
     - Der Zeitpunkt, als die Ressource in der Datenbank eingerichtet wurde.
   * - description
     - Die Beschreibung der Ressource.
   * - num_resources
     - Die Anzahl Ressourcen für das Dataset.


.. _api-nutzen-terminologie:

Terminologie von CKAN in opendata.swiss
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Über die API können Sie nach sämtlichen Metadaten in opendata.swiss suchen. 
Die Suchsyntax entspricht Apache `Lucene <https://lucene.apache.org/>`__, 
da opendata.swiss auf CKAN basiert und Apache `Solr <https://solr.apache.org/>`__ als 
Suchmaschine benutzt. 
Dies ist ebenfalls in der 
`CKAN-Dokumentation <https://docs.ckan.org/en/latest/user-guide.html#search-in-detail>`__ 
ausführlich beschrieben. 
Arbeiten Sie mit Metadaten der Organisation, Metadaten der Datasets oder Metadaten der 
Ressourcen? Beachten Sie dabei die Ebenen: Die folgende Auflistung zeigt die wichtigsten 
Terminologien, mit welchen Sie Informationen in opendata.swiss finden können:


``organization``
   Entspricht der `datenpublizierenden Organisation <https://opendata.swiss/de/organization>`__. 
   Jedes Dataset wird von genau einer Organisation publiziert. Eine Organisation 
   kann jedoch Unterorganisationen haben.
``package``, ``dataset``
   Entspricht einem :term:`Dataset <Dataset>` bei opendata.swiss. Damit gemeint sind 
   die Metadaten zu einem Bündel von Ressourcen.
``id``
   Entspricht in der Regel dem :term:`Slug <Slug>` des Datasets oder der Organisation auf opendata.swiss. 
   Bei Ausnahmefällen konsultieren Sie bitte die CKAN-Dokumentation.
``resource``, ``distribution``
   Entspricht einer 
   `Ressource <https://handbook.opendata.swiss/de/content/glossar/begriffe.html#term-Distribution>`__ bei 
   Opendata.swiss. Die Plattform opendata.swiss hostet selbst keine Datasets oder Ressourcen, 
   stellt aber downloadUrls oder accesssUrls und teilweise auch Daten Previews zur Verfügung. 
   Ressourcen in CKAN entsprechen dcat:Distribution 
   im :doc:`DCAT AP Standard <../glossar/bibliothek/dcat-ap-ch>`.
``group``
   Entspricht einer Kategorie bei opendata.swiss. Ein Dataset kann mehreren Kategorien angehören.
   Entspricht dcat:theme im :doc:`DCAT AP Standard <../glossar/bibliothek/dcat-ap-ch.html#dcat-dataset-theme>`.


.. _api-nutzen-beispiele:

Anwendungsbeispiele für die API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Typische Abfragen für Datennutzende
-----------------------------------

.. toggle-header::
    :header: status_show

    .. code-block:: bash
      :caption: Status der Plattform
      
       curl 'https://ckan.opendata.swiss/api/3/action/status_show'

.. toggle-header::
    :header: organization_list

    .. code-block:: bash
        :caption: Auflisten aller Organisationen
        
        curl 'https://ckan.opendata.swiss/api/3/action/organization_list'

.. toggle-header::
    :header: package_list

    .. code-block:: bash
        :caption: Auflisten aller Datasets

        curl 'https://opendata.swiss/api/3/action/package_list'

.. toggle-header::
    :header: package_search, fq, organization

    .. code-block:: bash
        :caption: Anzeigen aller Datasets einer bestimmten Organisation

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?fq=organization:bundesamt-fur-statistik-bfs'


.. toggle-header::
    :header: package_show, id

    .. code-block:: bash
        :caption: Information zu einem bestimmten Dataset

        curl 'https://ckan.opendata.swiss/api/3/action/package_show?id=administrative-units-switzerland-inspire'

.. toggle-header::
    :header: package_search, language

    .. code-block:: bash
        :caption: Datensätze einer Sprache

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?fq=language:de'

.. toggle-header::
    :header: group_list

    .. code-block:: bash
        :caption: Auflistung der Kategorien

        curl 'https://ckan.opendata.swiss/api/3/action/group_list'

.. toggle-header::
    :header: facet_field

    .. code-block:: bash
        :caption: Auflistung der zehn häufigsten Schlagwörter

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?facet.field=[%22tags%22]&facet.limit=10&rows=0'

.. toggle-header::
    :header: sort=relevance+asc

    .. code-block:: bash
        :caption: Geordnete Schlagwortsuche in den Datasets

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?facet.field=[%22keywords%22]&sort=relevance+asc'


Typische Anwendungen für Datenpublizierende
-------------------------------------------
.. toggle-header::
    :header: packet_search, organization, dataset_type
  
    .. code-block:: bash
        :caption: Harvester-ID Ihrer Organisation finden

        curl 'https://ckan.opendata.swiss/api/action/package_search?q=(organization:[“name” Ihrer Organisation)&fq=dataset_type:harvest'

.. toggle-header::
    :header: packet_search, -harvest_source_id, organization
  
    .. code-block:: bash
        :caption: Liste der manuell hinzugefügten Daten Ihrer Organisation

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?fq=-harvest_source_id:(*)organization:(“name” Ihrer Organisation)'

.. toggle-header::
    :header: packet_search, harvest_source_id

    .. code-block:: bash
        :caption: Liste der geharvesteten Daten Ihrer Organisation

        curl 'https://ckan.opendata.swiss/api/3/action/package_search?fq=harvest_source_id:[id Ihres Harvesters]'

.. toggle-header::
    :header: POST

    Wenn Sie über die entsprechenden Rechte verfügen, können Sie die Metadaten Ihrer 
    Datasets auch über die API-Schnittstelle anpassen. Sie finden Ihren API-Key auf 
    der Nutzerseite auf dem Backend von opendata.swiss. Die genaue Syntax ist u.a. 
    von Ihrem spezifischen Betriebssystem abhängig (beispielsweise 
    das richtige Format der Anführungszeichen)

    .. code-block:: bash
        :caption: Senden (POST) über die API Schnittstelle: package_patch
       
        curl -X POST https://ckan.ogdch-abnahme.clients.liip.ch/api/3/action/package_patch -H "Authorization: YOUR-PERSONAL-API-KEY" 
        -d "{""id"": ""eafa8336-3012-47f2-bc6a-bd3044687484"", ""accrual_periodicity"": ""http://publications.europa.eu/resource/authority/frequency/CONT""}"

    Datasets können auch über die API neu erstellt werden. Dazu benötigen Sie Ihren 
    API-Key und müssen die Metadaten als im JSON-Format übermitteln.

    .. code-block::
        :caption: Senden (POST) über die API Schnittstelle: package_create

        {
        'name': 'NAME_PACKAGE', 
        'identifier': 'NAME_PACKAGE@YOUR-ORGANIZATION-SLUG',
        'issued': '2023-02-12T00:00:00', 
        'private': False, 
        'isopen' : False, 
        'display_name': {
            'fr': 'display_name test_API_POST package fr', 
          	'de': 'display_name test_API_POST package de', 
          	'en': 'display_name test_API_POST package en', 
          	'it': 'display_name test_API_POST package it'
          	}, 
        'type': 'dataset', 
        'state': 'active',
        'description': {
          	'fr': 'description test_API_POST package fr', 
          	'en': 'description test_API_POST package en', 
          	'de': 'description test_API_POST package de', 
          	'it': 'description test_API_POST package it'
          	},
        'title': {
          	'fr': 'title test_API_POST package fr', 
          	'de': 'title test_API_POST package de', 
          	'en': 'title test_API_POST package en', 
          	'it': 'title test_API_POST package it'
          	}, 
        'publisher': {
            'url': 'YOUR_ORGANIZATION_S_URL',
            'name': 'YOUR_ORGANIZATION'
            },
        'keywords': {
            'fr': ['list', 'of','keywords', 'per','language','fr'], 
            'de': ['list', 'of','keywords', 'per','language','de'],
            'en': ['list', 'of','keywords', 'per','language','en'],
            'it': ['list', 'of','keywords', 'per','language','it'],
            },
        'contact_points': [{
            'email': 'CONTACT.POINT@EMAIL.ADDRESS',
            'name': 'NAME' 
            }],
        'accrual_periodicity': 'http://publications.europa.eu/resource/authority/frequency/MONTHLY',
        'resources': [{
        'owner_org': 'YOUR_ORGANIZATION_ID_ON_OPENDATA.SWISS', 
          	'display_name': {
          	'issued': '2023-02-12T00:00:00', 
          		'de': 'display_name test_API_POST resource de', 
          		'fr': 'display_name test_API_POST resource fr', 
          		'it': 'display_name test_API_POST resource it'
          		'en': 'display_name test_API_POST resource en', 
          	'title': {
          		}, 
          		'de': 'title test_API_POST resource de', 
          		'fr': 'title test_API_POST resource fr', 
          		'it': 'title test_API_POST resource it'
          		'en': 'title test_API_POST resource en', 
          	'download_url': 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_200KB_CSV-1.csv',
          		}, 
          		'fr': 'description test_API_POST resource fr', 
          	'description': {
          		'de': 'description test_API_POST resource de', 
          		'en': 'description test_API_POST resource en', 
          		}, 
          		'it': 'description test_API_POST resource it'
          	'name': {
            'format' : 'CSV',
          		'de': 'name test_API_POST resource de', 
          		'fr': 'name test_API_POST resource fr', 
          		'en': 'name test_API_POST resource en', 
          		'it': 'name test_API_POST resource it'
          		}, 
          	'rights': 'NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired', 
          	'url': 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_200KB_CSV-1.csv', 
            'identifier': 'identifier_resource_for_name_package_''@YOUR-ORGANIZATION-SLUG',
          	}], 
        }

    Bitte beachten Sie, dass die Nutzungsbedingungen auf Ebene der Ressource dem 
    kontrollierten Vokabular entsprechen. Vgl. Sie dazu den 
    `DCAT AP CH Standard <https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.htmldct-rights-dcat>`__.
    
    Zusätzlich werden die Angaben *private* und *isopen* benötigt. Mit *private* können 
    Sie definieren, ob das Dataset direkt veröffentlicht wird. Ein Dataset mit 
    *private : False* wird direkt auf dem Frontend publiziert. Mit *isopen* deklarieren 
    Sie, ob die Nutzungsbedingungen der Definition von open gemäss der 
    `Open Knowledge Foundation <https://okfn.org/opendata/>`__ entspricht.



Fetch-API
---------

Es ist auch möglich, über 
`Fetch-API <https://developers.google.com/web/updates/2015/03/introduction-to-fetch>`__ 
auf opendata.swiss zuzugreifen.

.. _api-nutzen-fragen:
.. container:: support

   Support

Noch Fragen?
------------

Haben Sie noch Fragen zur Nutzung unserer API? Dann 
`nehmen Sie mit uns Kontakt auf <mailto:opendata@bfs.admin.ch>`__. Bei Rückfragen 
zu einzelnen Datasets wenden Sie sich bitte direkt an die Datenpublizierenden. 
Die jeweiligen Kontaktangaben finden Sie im Dataset unter Zusätzliche Information.

**Haben Sie ein interessantes Nutzungsbeispiel?** Wir würden uns sehr freuen, davon zu 
erfahren und Ihr Projekt in unsere `Showcases <https://opendata.swiss/showcase>`__ 
aufzunehmen. `Oder Schreiben Sie uns <mailto:opendata@bfs.admin.ch>`__.

.. container:: materialien

    Mehr zum Thema

- `CKAN-API-Guide (Link) <https://docs.ckan.org/en/latest/api/#action-api-reference>`__  – Guidelines zur Nutzung der CKAN API
