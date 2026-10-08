#!/usr/bin/env bash
mkdir -p dist/assets/css dist/assets/chunks out
wget -P dist/assets https://scrapbox.io/assets/index.js
sleep 2
wget -P dist/assets https://scrapbox.io/assets/modern-browser-message.js
sleep 2
wget -P dist/assets https://scrapbox.io/assets/dedicated-worker.js
sleep 2
wget -P dist/assets/css https://scrapbox.io/assets/css/app.css
sleep 2
wget -P dist https://scrapbox.io/serviceworker.js
sleep 2
wget -P dist https://scrapbox.io/manifest.json

perl -nE 'say $1 while /(\.\/chunks\/chunk-[^"]+\.js)/g' dist/assets/index.js | sort -u |
  while read -r path; do
    wget -P dist/assets/chunks "https://scrapbox.io/assets/${path}"
    sleep 2
  done
