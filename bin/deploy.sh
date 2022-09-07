#!/bin/bash

# Activate the virtualenv
source venv/bin/activate

# Build the documents
make clean
make gettext
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html

# Rsync the documents to the server
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v ./build/de/html/ ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/de/
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v ./build/fr/html/ ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/fr/
echo "-> deploy finished, site available at https://${HOSTNAME}/"
