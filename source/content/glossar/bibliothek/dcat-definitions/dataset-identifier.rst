:DCAT URI: dct:identifier
:Domain: dcat:Catalog
:Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal with
        special requirements, see Usage Notes
:Requirement Level: mandatory
:Cardinality: 1..1
:Description: Unique identifier of the dataset across all publishers.
:Usage Notes: The identifier is expected in the following structure:
              ``[Source-Dataset-ID]@[Source-Organisation-ID]`` where
              ``[Source-Organisation-ID]`` is the :term:`slug <Slug>` of
              the organization on opendata.swiss.
              ``[Source-Dataset-ID]`` needs to be unique within the
              datasets of the organization. A recommended way to choose this
              is to use the ID in the source system of the
              publisher. It can consist out of the following characters
              ``A-Za-z``, ``0-9`` and ``-`` and ``_``
