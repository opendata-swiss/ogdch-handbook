**Geocat-Mapping**

**Geocat-Mapping**

:XPATH: //gmd:identificationInfo//gmd:topicCategory/
:Value: gmd:MD_TopicCategoryCode
:Mapping:
    The first one in the following order:

        //gmd:resourceConstraints//gmd:otherConstraints//gmd:LocalicedCharacterString
        //gmd:linkage//che:LocalisedURL

    This applies to texts in DE and FR:

        :NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired:

        - Freie Nutzung
        - Utilisation libre

        :NonCommercialAllowed-CommercialAllowed-ReferenceRequired:

        - Freie Nutzung. Quellenangabe ist Pflicht.
        - Utilisation libre. Obligation d’indiquer la source.

        :NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired:

        - Freie Nutzung. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.
        - Utilisation libre. Utilisation à des fins commerciales uniquement avec l’autorisation du fournisseur des données.

        :NonCommercialAllowed-CommercialWithPermission-ReferenceRequired:

        - Freie Nutzung. Quellenangabe ist Pflicht. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.
        - Utilisation libre. Obligation d’indiquer la source. Utilisation commerciale uniquement avec l’autorisation du fournisseur des données.

.. code-block:: xml
    :caption: getting dct:rights from XPATH: get first of the following order

    //gmd:resourceConstraints//gmd:otherConstraints//gmd:LocalicedCharacterString
    //gmd:linkage//che:LocalisedURL
