:DCAT URI: dct:license
:Domain: dcat:Distribution
:Value: ``dct:LicenseDocument``
:Requirement Level: optional
:Cardinality: 1..1
:Description: The `rights statement / terms of use <https://opendata.swiss/de/terms-of-use>`__ indicates for what purpose and in what context
              the data of a distribution can be used: for commercial or for non commercial purposes. 
              Does it need to be referenced, when it is used? Must permission be obtained for commercial use. 
              These conditions are included in the rights statements. See the list below for the exact values.

:Usage Notes: Terms of use are no longer referenced under ``dct:rights``, but under ``dct:license``. 
            
            Exception: If other licenses, such as CC-licenses, are used for the dataset besides the terms of use, the 
            terms of use are referenced under dct:rights. Only the terms of use are displayed on opendata.swiss. If other
            licenses are included, they are passed on to the portal data.europa.eu.

            This field ensures compatibility to other metadata standards such as DCAT-AP.

.. code-block::
    :caption: Values **acceptable** for opendata.swiss
    :emphasize-lines: 1,2,3,4

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
