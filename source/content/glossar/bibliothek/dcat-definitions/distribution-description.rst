.. _distribution-description:

.. container:: dcat-attribute

   **dct:description**

   :RDF: RDF-property ``dct:description`` of ``dcat:Distribution``
   :Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
   :Requirement Level: conditional: required if the distribution does not contain all the content of the dataset.
   :Cardinality: 1..4 (one for each language)
   :Description: Title of the dataset in different languages
   :Usage Notes: Provide at least one of the languages ``en``, ``de``, ``fr``, ``it``
                 Markdown can be used in the descriptions
