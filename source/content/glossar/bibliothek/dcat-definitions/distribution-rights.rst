:DCAT URI: dct:rights
:Domain: dcat:Distribution
:Value: `dct:RightsStatement <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/RightsStatement>`__
:Requirement Level: Recommended
:Description: This property refers to a statement that specifies rights associated with the Distribution. Only used in exceptional cases (see usage notes below).
:Usage notes: Imporant: The property `dct:license <https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dct-license-dcat>`__ with the values accepted for opendata.swiss is now 
            requiered for the `terms of use <https://opendata.swiss/de/terms-of-use>`__. 
            **Exception:** If someone uses datasets with CC-licenses in their catalogue, these can be kept under
            dct:rights, but in this case the terms of use must be entered under dct:license. 

.. code-block::
    :caption: Values **acceptable** for opendata.swiss
    :emphasize-lines: 1,2,3,4

    http://dcat-ap.ch/vocabulary/licenses/terms_open
    http://dcat-ap.ch/vocabulary/licenses/terms_by
    http://dcat-ap.ch/vocabulary/licenses/terms_ask
    http://dcat-ap.ch/vocabulary/licenses/terms_by_ask

.. code-block::
    :caption: **Deprecated:** Values **acceptable** for opendata.swiss

    NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired
    NonCommercialAllowed-CommercialAllowed-ReferenceRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceRequired

.. code-block::
    :caption: Values **not acceptable** for opendata.swiss

    NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired
    NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired
