:DCAT URI: dct:rights
:Domain: dcat:Distribution
:Value: `dct:RightsStatement <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/RightsStatement>`__
:Requirement Level: Recommended
:Cardinality: 0..1
:Description: This property refers to a statement that specifies rights associated with the Distribution. Only used in exceptional cases (see usage notes below).
:Usage notes: * **Important!** The `dct:licence <https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dct-license-dcat>`__ property is required to specify the `terms of use <https://opendata.swiss/de/terms-of-use>`__ of opendata.swiss. 
            * **Exception:** dct:rights is therefore only used if a publisher uses datasets with CC licences in its catalogue, which it wants to forward to data.europa.eu. These can then be specified under dct:rights. On opendata.swiss, only the three CC licences specified below are imported under dct:rights and forwarded to the portal data.europa.eu. The CC licences are not displayed on opendata.swiss. 
            * CV to be used for the CC-License: `DCAT-AP CH license vocabulary <https://dcat-ap.ch/vocabulary/licenses/20240716.html>`__

.. code-block::
    :caption: dct:rights values **acceptable** for opendata.swiss
    :emphasize-lines: 1,2,3

    https://creativecommons.org/publicdomain/zero/1.0/
    https://creativecommons.org/licenses/by/4.0/
    https://creativecommons.org/licenses/by-sa/4.0/

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
