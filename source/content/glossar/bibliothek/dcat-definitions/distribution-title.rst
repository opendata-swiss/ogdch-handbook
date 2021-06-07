:DCAT URI: dct:title
:Domain: dcat:Distribution
:Value: ``rdfs:Literal`` http://www.w3.org/TR/rdf-schema/#ch_literal
:Mandatory: no - except if the distribution does not contain
            all the content of the dataset.
:Cardinality: 0..n (one for each language)
:Attributes: - Name: ``xml:lang``
             - Content: ``en``, ``de``, ``fr``, ``it``
             - Description: Language of the element
             - Mandatory: yes
:Description: The title of the distribution in the language defined
              by the ``xml:lang?`` attribute. If this element is left out,
              the ``dct:title`` of the dataset is used instead.
