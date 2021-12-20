:DCAT URI: dct:rights
:Domain: dcat:Distribution
:Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
:Requirement Level: mandatory
:Cardinality: 1..1
:Description: Rights statement that is relevant for the dcat:accessURL of this distribution.
:Usage Notes: The rights statement declares for which purpose and in which context
              the data of a distribution can be used: for commercial purposes or only for
              non commercial purposes. Does it need to be referenced, when it is used? These
              conditions are all captured in the right statements. For the exact values,
              see the list below.

.. code-block::
    :caption: Values acceptable for opendata.swiss
    :emphasize-lines: 1,2,3,4

    NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired
    NonCommercialAllowed-CommercialAllowed-ReferenceRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceRequired

.. code-block::
    :caption: Values not acceptable for opendata.swiss

    NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired
    NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired
