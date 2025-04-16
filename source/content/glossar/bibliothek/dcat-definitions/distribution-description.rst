:DCAT URI: dct:description
:Domain: dcat:Distribution
:Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
:Requirement Level: conditional: required if the distribution does not contain all the content of the dataset.
:Cardinality: 0..4 (one for each language)
:Description: Description of the dataset in different languages
:Usage Notes: * The description must be provided as language-tagged strings in at least one of the languages ``en``, ``de``, ``fr``, ``it``.
              * Federal offices must provide the description in at least two official languages (``de``, ``fr``, ``it``). Cantons are required to provide it in at least one official language. All others must make it available in at least one of the four languages (``en``, ``de``, ``fr``, ``it``). Whenever possible, it should be provided in all four languages.
              * Markdown can be used.
