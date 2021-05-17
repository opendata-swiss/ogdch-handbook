.. _dataset-contacts:

.. container:: dcat-attribute

   **dcat:contactPoint**

   :RDF: RDF-property ``dcat:contactPoint`` of ``dcat:Dataset``
   :Value: ``vcard:Kind``
   :Requirement Level: mandatory
   :Cardinality: 1..n
   :Description: One or more contact email addresses for this dataset
   :Usage Notes: ``vcard:Kind`` is in itself a class: choose between
                 ``vcard:Organization`` and ``vcard:Individual`` and
                 set the attributes ``vcard:hasEmail`` and ``vcard:fn``.
