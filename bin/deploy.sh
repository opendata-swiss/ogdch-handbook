#!/bin/bash

cd docs
make clean
make gettext
make -e SPHINXOPTS="-D language='de'" BUILDDIR="build/de" html
make -e SPHINXOPTS="-D language='fr'" BUILDDIR="build/fr" html
cd ..
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v docs/build/de/html/                      ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/de/
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v docs/build/fr/html/                      ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/fr/
rsync -a          -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v apache/.htaccess${HTACCESS_VARIANT} ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/.htaccess
echo "-> deploy finished, site available at https://${HOSTNAME}/"