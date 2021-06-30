 .. code-block:: xml
    :caption: getting the "creation" date from ``//gmd:identificationInfo//gmd:citation//gmd:CI_Date``
              to map onto ``dct:issued``
    :emphasize-lines: 12,16,17

    <gmd:CI_Date>
        <gmd:date>
            <gco:DateTime>2020:10:21T00:00:00</gco:DateTime>
        </gmd:date>
        <gmd:dateType>
            <gmd:CI_DateTypeCode codeListValue="revision"
                                 codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode"/>
        </gmd:dateType>
    </gmd:CI_Date>
    <gmd:CI_Date>
        <gmd:date>
            <gco:DateTime>2011:01:01T00:00:00</gco:DateTime>
        </gmd:date>
        <gmd:dateType>
            <gmd:CI_DateTypeCode
                codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode"
                codeListValue="creation"/>
        </gmd:dateType>
    </gmd:CI_Date>
