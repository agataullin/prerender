#!/bin/sh

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install node
npm install -g foreman

# Install redis server
sudo apt-get install -y redis-server
sudo service redis-server

cd ~/Code
npm install
# Run nf start to start the service on local
