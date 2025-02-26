#!/bin/bash
#TODO: Check where RN outputs the build

#NOTE, run this from the project root.
#cd frontend
#scripts/web_deploy.sh
pnpm build
#pnpm server - preview the build?

#https://dev-www.pingpoint.app/

HOST="storage.bunnycdn.com"

#TODO, set environment variables beforehand:
#BUNNY_FTP_USERNAME="your-storage-zone-name"
#BUNNY_FTP_PASSWORD="your-ftp-password"

lftp -c "
open ftp://$HOST
user $BUNNY_FTP_USERNAME $BUNNY_FTP_PASSWORD
mirror -R ./dist/ .
exit"
