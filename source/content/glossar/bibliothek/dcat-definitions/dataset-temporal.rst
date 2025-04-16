:DCAT URI: dct:temporal
:Domain: dcat:Dataset
:Value: `dct:PeriodOfTime <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-PeriodOfTime>`__. Start and end date as `rdfs:Literal <https://www.w3.org/TR/rdf-schema/#ch_literal>`__ (typed as `xsd:date <https://www.w3.org/TR/xmlschema11-2/#date>`__, `xsd:dateTime <https://www.w3.org/TR/xmlschema11-2/#dateTime>`__, `xsd:gYear <https://www.w3.org/TR/xmlschema11-2/##gYear>`__ or `xsd:gYearMonth <https://www.w3.org/TR/xmlschema11-2/#gYearMonth>`__)
:Requirement Level: optional
:Cardinality: 0..n
:Description: One or more time period(s) that the dataset covers.
:Usage Notes: ``<schema:startDate>`` contains the start date,
              ``<schema:endDate>`` contains the end date. It needs a start and end date. If you do not know the end date, please do not use the property.