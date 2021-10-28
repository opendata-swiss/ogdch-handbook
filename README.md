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

## Build the German Documentation

The German documentation can be built locally like this:

```
(p3venv) cd docs
(p3venv) make clean
(p3venv) make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
```

No special server is needed to serve it: 

- go to `build/de/` 
- run `index.html` in a browser of your choice

## Update French translations

If you need on the French translations always start with a clean master repo:

```
git checkout master
git reset --hard
git checkout -b update-translations-...
make clean
```

This is necessary, since when generating the strings to translate 
`sphinx-intl` will check against your current translations. The process of 
discovering what is new regarding the translations is very sensitive to any 
outdatad files that might be in the repo, when starting the process. 

When the repo is clean, you may start the process:

First extract message strings into `.pot` files:

```
make gettext
```

This will generate files located in `build/gettext/` with translatable 
strings extracted from the `.rst` files. 
Now generate the translation files with the following command:

```
sphinx-intl update -p build/gettext -l de -l fr
```

The generated files will be located in `source/locale/fr/LC_MESSAGES` and 
`source/locale/de/LC_MESSAGES`. Only the files in 
`source/locale/fr/LC_MESSAGES` need further work: 
Fill in the translations in the `.po` files. Once you are ready commit your 
updated `.po` files to github.

To test the translations do the following to
compile `.mo` files and build the translated html files for both languages:

```
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
 ```

See the [sphinx-intl documentation](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html)
for more details. Load the index file in to the browser as described above 
in the section on the German version.

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
