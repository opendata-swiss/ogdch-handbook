.. code-block:: xml
    :caption: Getting a time period for a dataset with ``//gmd:identificationInfo//gmd:extent//gmd:temporalElement``
    :emphasize-lines: 5,6

    <gmd:temporalElement>
        <gmd:EX_TemporalExtent>
            <gmd:extent>
                <gml:TimePeriod gml:id="timePeriod1">
                    <gml:beginPosition>2020-02-01T00:00:00</gml:beginPosition>
                    <gml:endPosition>2021-04-01T23:59:59</gml:endPosition>
                </gml:TimePeriod>
            </gmd:extent>
        </gmd:EX_TemporalExtent>
    </gmd:temporalElement>
