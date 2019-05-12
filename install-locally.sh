#!/usr/bin/env bash

# Bypass "ERROR Invalid extension name 'dracula.min'" during `vsce package`
# due to the "." in "dracula.min" in package.json name
# Also much faster than vsce package

rsync package.json ~/.vscode/extensions/ashrafhadden.dracula.min-1.3.0
rsync -r themes ~/.vscode/extensions/ashrafhadden.dracula.min-1.3.0
rsync icon.png ~/.vscode/extensions/ashrafhadden.dracula.min-1.3.0
