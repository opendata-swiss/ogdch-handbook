:DCAT: :ref:`dct:rights <dcat-distribution-rights>`
:XPATH: ``//gmd:resourceConstraints//gmd:otherConstraints``
:Mapping of values: Geocat rights statements are mapped to rights statements from the DCAT-AP CH rights vocabulary:
          :download:`RIGHTS-RDF </_static/vocabulary/rights.rdf>`,
          :download:`RIGHTS-Turtle </_static/vocabulary/rights.ttl>`.
          For details of the mapping, see below.

.. code-block:: xml
    :caption: getting rights statements with XPATH

    //gmd:resourceConstraints//gmd:otherConstraints

.. code-block:: python
    :caption: Mapping of rights statements

        rights = {
            u'Freie Nutzung': 'NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired',
            u'Utilisation libre': 'NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired',

            u'Freie Nutzung. Quellenangabe ist Pflicht.': 'NonCommercialAllowed-CommercialAllowed-ReferenceRequired',
            u'Utilisation libre. Obligation d’indiquer la source.': 'NonCommercialAllowed-CommercialAllowed-ReferenceRequired',

            u'Freie Nutzung. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired',
            u'Utilisation libre. Utilisation à des fins commerciales uniquement avec l’autorisation du fournisseur des données.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired',

            u'Freie Nutzung. Quellenangabe ist Pflicht. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceRequired',
            u'Utilisation libre. Obligation d’indiquer la source. Utilisation commerciale uniquement avec l’autorisation du fournisseur des données.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceRequired'
        }
