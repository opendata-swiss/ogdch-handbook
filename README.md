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

The handbook uses Python3. Set up the virtual environment, install
requirements and copy the `.env` file to set environment variables.

```
python -m venv p3venv 
cd ogdch-handbook
source p3venv/bin/activate
(p3venv) pip install -r requirements.txt
(p3venv) cp .env.dist .env
```

## Build the Documentation

The documentation can be built locally:

```
(p3venv) cd docs
(p3venv) make clean
(p3venv) make html
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
 make -e SPHINXOPTS="-D language='en'" BUILDDIR="build/en" html
 ```

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
(p3venv) make linkcheck
``` 

## Environment variables

For local development, environment variables that affect how the docs are
built can be set in the `.env` file, which is ignored by git, and the
`.env.dist` file, which is committed. Calling the `load_dotenv` function from
the `dotenv` library before accessing environment variables ensures that they
are taken from `.env` if it exists, and from the environment otherwise.
