#!/bin/bash

# Install the ssh private key that will let us access the server
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -

# Rsync the documents to the server
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v ./build/de/html/ ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/de/ || exit 1
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no -p ${SSH_PORT}" -v ./build/fr/html/ ${SSH_USER}@${SSH_HOST}:${DEST_PATH}/fr/ || exit 1
echo "-> deployment to ${ENV} environment was successful!"
