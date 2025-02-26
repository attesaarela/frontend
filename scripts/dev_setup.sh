#!/bin/bash

#NOTE: Vite requires Node.js version 18+ or 20+. However, some templates require a higher Node.js version to work

#The following pnpm installation doesn't require sudo. Requires source .bashrc afterwards:
curl -fsSL https://get.pnpm.io/install.sh | sh -

#bunny.net deployment
sudo apt-get install lftp

sudo npm install -g expo-cli
