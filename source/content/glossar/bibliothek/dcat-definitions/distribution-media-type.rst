.. _distribution-media-type:

.. container:: dcat-attribute

   **dcat:mediaType**

   :RDF: RDF-property ``dct:mediaType`` of ``dcat:Distribution``
   :Value: `dct:MediaTypeOrExtent`` must be a MIME type of http://www.iana.org/assignments/media-types/media-types.xhtml
   :Requirement Level: conditional, required if the distribution is  a file accessible by a ``dcat:downloadURL``
   :Cardinality: 0..1
   :Description: Resource format of the data provided by the download url
   :Usage Notes: Not required for distributions that have only a ``dcat:accessURL``
