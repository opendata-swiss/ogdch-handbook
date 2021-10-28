# Handbook for opendata.swiss

This is the handbook for opendata.swiss https://opendata.swiss/.
It is published at https://handbook.opendata.swiss. It is currently 
available in the two languages German and French. German is its original 
language and French is added as a tranlation.
 
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
(p3venv) make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
```

## Update translations

First extract message strings into `.pot` files:

```
make clean
make gettext
```

The generated files will be located in `build/gettext/`.

From those `.po` files for each language: `de` and `fr` translateable items 
can be created with the following command:

make sure the `.po` files are exactly as they are now in the repo before 
generating for new translations

```
git checkout master
git reset --hard
make clean
make gettext
sphinx-intl update -p build/gettext -l de -l fr
```

The generated files will be located in `source/locale/fr/LC_MESSAGES`.
It is best to manually check which `.po` to update since sphinx-intl sometimes
generates updated translations where only the creation time of the file has 
changed.

Check the generated `po` files and fill in translated strings in the where 
needed. 

To test the translations do the following to
compile `.mo` files and build the translated html files for both languages:

```
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
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
