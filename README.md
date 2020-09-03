# Handbook for opendata.swiss

This is the handbook for opendata.swiss https://opendata.swiss/.
It is published at https://handbook.opendata.swiss.
 
This repo replaces the previous version of the handbook, which can be found here: 
https://github.com/opendata-swiss/ogd-handbook-site

## About

The handbook is targeted towards datapublishers and datausers: 

- datapublishers get guidance on how to publish their data for themselves
  and on opendata.swiss
- datausers find in there instructions on how to use the data via api and 
  how to search for data on opendata.swiss

The handbook is implemented with Sphinx.

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

The documentation can be built locally:

```
(p3venv)cd docs
(p3venv)make clean
(p3venv)make html
```

## Update translations

To extract message strings into `.pot` files:

```
make gettext
```

The generated files will be located in `build/gettext/`.
To generate `.po` files for one or more languages, e.g. `en` and `fr`

```
sphinx-intl update -p build/gettext -l en -l fr
```

The generated files will be located in `source/locale/en/LC_MESSAGES`.
Fill in the translated strings in the `.po` files. Then do the following to
compile `.mo` files and build the translated html files for one language:

```
make -e SPHINXOPTS="-D language='en'" html
```

The html files are always put into `build/html/`. If you generate html files
for a second language, they will overwrite the previous ones.

See the [sphinx-intl documentation](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html)
for more details.

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
