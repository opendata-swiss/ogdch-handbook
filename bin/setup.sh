#!/bin/bash

# Install the ssh private key that will let us access the server
'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
# Install rsync to deploy with
apt-get update -y && apt-get install rsync -y
# Setup Python (printing out version for debugging)
python -V
pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
