:DCAT URI: `dct:license <https://www.w3.org/TR/vocab-dcat/#Property:distribution_license>`__
:Domain: dcat:Distribution
:Value: `dct:LicenseDocument <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#LicenseDocument>`__
:Requirement Level: Mandatory
:Cardinality: 1..1
:Description: The `terms of use <https://opendata.swiss/de/terms-of-use>`__ indicates for what purpose and in what context
              the data of a distribution can be used: for commercial or for non commercial purposes. 
              Does it need to be referenced, when it is used? Must permission be obtained for commercial use. 
              These conditions are included in the terms of use statements. See the list below for the exact values.

:Usage Notes: * Terms of use are no longer referenced under ``dct:rights``, but under ``dct:license``. 
            
            * **Exception:** If a CC-license is used for the dataset in addition to the terms of use, it must be referenced under `dct:rights <https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dct-rights-dcat>`__. Only the terms of use from the list below are displayed on opendata.swiss. If CC-licenses are included, they should be referenced under ``dct:rights`` to pass on to the portal data.europa.eu.

            * CV to be used for the terms of use: `DCAT-AP CH license vocabulary <https://dcat-ap.ch/vocabulary/licenses/20240716.html>`__

            * This field ensures compatibility to other metadata standards such as DCAT-AP.

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
