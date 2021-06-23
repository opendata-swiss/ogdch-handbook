:DCAT URI: dct:format
:Domain: dcat:Distribution
:Value: `dct:MediaTypeOrExtent`` http://www.iana.org/assignments/media-types/media-types.xhtml
:Requirement Level: conditional, required if the distribution is accessible by a ``dcat:downloadURL``
:Cardinality: 0..1
:Description: Format of the distribution
:Usage Notes: If neither the ``downloadURL`` nor the ``mediaType`` provide a
              valid format, this value is used to display the format of the distribution.
