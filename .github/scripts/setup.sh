#!/bin/bash

# Install rsync to deploy with
apt-get update -y && apt-get install rsync -y
# Setup Python (printing out version for debugging)
python -V
pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
