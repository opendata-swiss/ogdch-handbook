.. toggle-header::
    :header: Example for geocat mapping to ``dct:modified``

    .. code-block:: xml
        :caption: Example of getting dct:modified: codeListValue=“revision“ was found, 2020-02-23 is taken
        :emphasize-lines: 7,10,11

        <gmd:identificationInfo>
           ...
           <gmd:citation>
              ...
                  <gmd:CI_Date>
                     <gmd:date>
                        <gco:Date>2020-02-23</gco:Date>
                     </gmd:date>
                     <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode"
                                             codeListValue="revision"/>
                     </gmd:dateType>
                  </gmd:CI_Date>
              ...
           </gmd:citation>
          ...
        <gmd:identificationInfo>