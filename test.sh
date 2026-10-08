#!/usr/bin/env bash

set -euo pipefail

BASE_URL="https://scrapbox.io"
ASSETS_DIR="dist/assets"
DELAY=2

mkdir -p "$ASSETS_DIR/css" "$ASSETS_DIR/chunks" dist out

download() {
  local dest="$1"
  local url="$2"

  wget -q -P "$dest" "$BASE_URL/$url"
  sleep "$DELAY"
}

download "$ASSETS_DIR" "assets/index.js"
download "$ASSETS_DIR" "assets/modern-browser-message.js"
download "$ASSETS_DIR" "assets/dedicated-worker.js"
download "$ASSETS_DIR/css" "assets/css/app.css"
download "dist" "serviceworker.js"
download "dist" "manifest.json"

perl -nE 'say $1 while /(\.\/chunks\/chunk-[^"]+\.js)/g' \
  "$ASSETS_DIR/index.js" |
  sort -u |
  while read -r path; do
    download "$ASSETS_DIR/chunks" "assets/${path#./}"
  done
