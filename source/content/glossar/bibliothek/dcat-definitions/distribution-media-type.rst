:DCAT URI: dcat:mediaType
:Domain: dcat:Distribution
:Value: ``dct:MediaType`` must be a MIME type of `[IANA-MEDIA-TYPES] <http://www.iana.org/assignments/media-types/media-types.xhtml>`_
:Requirement Level: conditional, required if the distribution is  a file accessible by a ``dcat:downloadURL``
:Cardinality: 0..1
:Description: Resource format of the data provided by the ``dcat:downloadURL``
:Usage Notes: Not required for distributions that have only a ``dcat:accessURL``
