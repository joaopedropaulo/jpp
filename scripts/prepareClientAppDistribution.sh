#!/bin/sh

cd ../client
npm install
npm run build
cp -R build ../server/src/clientApp