.. _distribution-rights:

.. container:: dcat-attribute

   **dct:rights**

   :RDF: RDF-property ``dct:rights`` of ``dcat:Dataset``
   :Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
   :Requirement Level: mandatory
   :Cardinality: 1..1
   :Description: Rights statement of this distribution. It relates to the ``dcat:accessURL``
   :Usage Note: The rights statement is composed of 3 elements that can be merged and summarized as a literal:

   :Mapping:
          :Non-commercial use: allowed or not allowed
          :Commercial use: allowed, allowed with permission and not allowed
          :Reference: required or not required

          - NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired (acceptable for opendata.swiss, Open Definition compliant)
          - NonCommercialAllowed-CommercialAllowed-ReferenceRequired (acceptable for opendata.swiss, Open Definition compliant)
          - NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired (acceptable for opendata.swiss)
          - NonCommercialAllowed-CommercialWithPermission-ReferenceRequired (acceptable for opendata.swiss)
          - NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
          - NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired (not acceptable for opendata.swiss)
          - NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired (not acceptable for opendata.swiss)