.. _dataset-spatial:

.. container:: dcat-attribute

   **dct:spatial**

   :RDF: RDF-property ``dct:relation`` of ``dcat:Dataset``
   :Value: ``dct:Location`` https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-Location
   :Requirement Level: optional
   :Cardinality: 0..n
   :Description: Geographical classification of the dataset.
   :Usage Note: Can be a description, coordinates, a bounding-box or a polygon.
                This field currently supports GeoJSON with the
                `LOCN extension <https://www.w3.org/community/locadd/wiki/LOCN_extension:_Metadata>`__ .
                See also: `How should dct:spatial and dct:Location be used? <https://joinup.ec.europa.eu/release/how-should-dctspatial-and-dctlocation-be-used>`__                                |
