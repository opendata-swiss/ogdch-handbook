.. toggle-header::
    :header: Example for geocat mapping to ``dct:issued``

    .. code-block:: xml
        :caption: example: codeListValue=“publication“ was found, 2012-05-11 is taken
        :emphasize-lines: 4,7

        <gmd:date>
           <gmd:CI_Date>
              <gmd:date>
                 <gco:Date>2012-05-11</gco:Date>
              </gmd:date>
              <gmd:dateType>
                 <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication"/>
              </gmd:dateType>
           </gmd:CI_Date>
        </gmd:date>