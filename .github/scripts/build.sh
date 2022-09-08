#!/bin/bash

# Activate the virtualenv
source venv/bin/activate

# Build the documents
make clean
make gettext
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html
