**Geocat-Mapping**

:XPATH: //gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/
:Value: gmd:MD_MaintenanceFrequencyCode/@codeListValue
:Mapping:

   :continual: http://purl.org/cld/freq/continuous
   :daily: http://purl.org/cld/freq/daily
   :weekly: http://purl.org/cld/freq/weekly
   :fortnightly: http://purl.org/cld/freq/biweekly
   :monthly: http://purl.org/cld/freq/monthly
   :quarterly: http://purl.org/cld/freq/quarterly
   :biannually: http://purl.org/cld/freq/semiannual
   :annually: http://purl.org/cld/freq/annual
   :asNeeded: http://purl.org/cld/freq/completelyIrregular
   :irregular: http://purl.org/cld/freq/completelyIrregular
   :notPlanned: http://purl.org/cld/freq/completelyIrregular
   :unknown: http://purl.org/cld/freq/completelyIrregular

.. code-block:: xml
    :caption: getting frequency with XPATH

    //gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue
