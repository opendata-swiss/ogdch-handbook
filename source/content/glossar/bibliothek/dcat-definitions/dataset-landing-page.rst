:DCAT URI: dcat:landingPage
:Domain: dcat:Dataset
:Value: :fa:`exclamation` ``foaf:Document`` http://xmlns.com/foaf/spec/#term_Document
:Requirement Level: optional
:Cardinality: 0..1
:Description: Website of the dataset with related information
:Usage Notes: If data of the dataset is only accessible via a landing page
              (i.e. direct download URLs are not known), the landing page must be set and
              the link should be duplicated as ``dcat:accessURL`` on a distribution.
:Update:      :fa:`exclamation` Use a resource instead of a string literal for the landing page
