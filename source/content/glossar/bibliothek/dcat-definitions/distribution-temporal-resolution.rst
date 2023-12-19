:DCAT URI: dcat:temporalResolution
:Domain: dcat:Distribution
:Value: ``xsd:duration`` https://www.w3.org/TR/xmlschema11-2/#duration
:Requirement Level: Optional
:Cardinality: 0..1
:Description: Minimum time period resolvable in the dataset distribution.
:Usage Notes: If the dataset is a time-series this should correspond to the spacing 
            of the items in the series. For other kinds of dataset, this property will
            usually indicate the smallest time difference between items in the dataset.

:Usage Notes: Alternative temporal resolutions might be provided in different dataset distributions.
