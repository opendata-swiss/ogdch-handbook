:DCAT URI: dct:rights
:Domain: dcat:Distribution
:Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
:Requirement Level: mandatory
:Cardinality: 1..1
:Description: Rights statement of this distribution. It relates to the ``dcat:accessURL``
:Usage Note: The rights statement is composed of 3 elements that can be merged and summarized as a literal:
:Mapping: 'Non-commercial use', 'Commercial use' and 'Reference' are combined with 'Allowed', 'WithPermission', 'Required', etc.

.. code-block::
    :caption: Values acceptable for opendata.swiss

    NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired
    NonCommercialAllowed-CommercialAllowed-ReferenceRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired
    NonCommercialAllowed-CommercialWithPermission-ReferenceRequired

.. code-block::
    :caption: Values not acceptable for opendata.swiss

    NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
    NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired (not acceptable for opendata.swiss)
    NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired (not acceptable for opendata.swiss)
