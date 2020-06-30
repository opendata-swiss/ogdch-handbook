# Handbook for opendata.swiss

This is the handbook for opendata.swiss https://opendata.swiss/.
It is published at https://handbook.opendata.swiss.

The handbook is targeted towards datapublishers and datausers: 

- datapublishers get guidance on how to publish their data for themselves
  and on opendata.swiss
- datausers find in there instructions on how to use the data via api and 
  how to search for data on opendata.swiss

The handbook will is implemented with Sphinx.

## Installation

The handbook uses Python3:

Set up a virtual environment:

```
python -m venv p3venv 
cd ogdch-handbook
``` 

With the virtualenv activated: install the requirements:

```
source p3venv/bin/activate
(p3venv)pip install -r requirements.txt 
```

## Build the Documentation

The documentation can be build locally:

```
(p3venv)cd docs
(p3venv)make clean
(p3venv)make html
```

## Use

No special server is needed: 

- go to docs/build/html and 
- run `index.html` in a browser of your choice

## Linkchecker

The documentation includes a check of its external links.

You can run it with make:

```
(p3venv)make linkcheck
``` 
