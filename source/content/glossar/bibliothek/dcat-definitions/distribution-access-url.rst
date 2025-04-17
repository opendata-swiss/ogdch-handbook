:DCAT URI: dcat:accessURL
:Domain: dcat:Distribution
:Value: `rdfs:Resource <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/Standard>`__
:Requirement Level: mandatory
:Cardinality: 1..n
:Description: A URL of the resource that gives access to a distribution of the dataset. E.g., landing page, feed, SPARQL endpoint.
:Usage Notes: * ``dcat:accessURL`` SHOULD be used for the URL of a service or location that can provide access to this distribution, typically through a Web form, query or API call.
              * If the accessURL is also a downloadURL, then it must be also entered in the ``dcat:downloadURL`` field.
              * If the distribution(s) are accessible only through a landing page (i.e., direct download URLs are not known), then the landing page URL associated with the dcat:Dataset SHOULD be duplicated as access URL on a distribution.
              * The use of http://www.w3.org/2001/XMLSchema#anyURI is deprecated.