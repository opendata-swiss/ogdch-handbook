.. _dataset-coverage:

.. container:: dcat-attribute

   **dct:coverage**

   :RDF: RDF-property ``dct:coverage`` of ``dcat:Dataset``
   :Value: ``dct:LocationPeriodOrJurisdiction``,
           see http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction
   :Requirement Level: optional
   :Cardinality: 0..n
   :Description: The location or time a dataset covers.
   :Usage Notes: This property is deappreciated.
                 Consider to use ``dct:temporal`` or ``dct:spatial``.
                 If a date is provided, it does not have to be an ISO date.
