:DCAT: :ref:`dcat:accrualPeriodicity <dcat-dataset-accrual-periodicity>`
:XPATH: ``//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/``
:Value: ``gmd:MD_MaintenanceFrequencyCode/@codeListValue``
:Mapping of values: For the mapping of Frequency Codes see below

.. code-block:: xml
    :caption: getting frequency with XPATH

    //gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue

.. code-block:: python
    :caption: Mapping of the Frequency Codes

    frequency_mapping = {
        'continual':
          'http://publications.europa.eu/resource/authority/frequency/CONT',
        'daily':
          'http://publications.europa.eu/resource/authority/frequency/DAILY',
        'weekly':
          'http://publications.europa.eu/resource/authority/frequency/WEEKLY',
        'fortnightly':
          'http://publications.europa.eu/resource/authority/frequency/BIWEEKLY',
        'monthly':
          'http://publications.europa.eu/resource/authority/frequency/MONTHLY',
        'quarterly':
          'http://publications.europa.eu/resource/authority/frequency/QUARTERLY',
        'biannually':
          'http://publications.europa.eu/resource/authority/frequency/ANNUAL_2',
        'annually':
          'http://publications.europa.eu/resource/authority/frequency/ANNUAL',
        'asNeeded':
          'http://publications.europa.eu/resource/authority/frequency/IRREG',
        'irregular':
          'http://publications.europa.eu/resource/authority/frequency/IRREG',
    }
