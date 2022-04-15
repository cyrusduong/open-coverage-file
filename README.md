# open-coverage-file

Open Coverage File is a VSCode extension that makes it easy to open the lcov coverage file for the file you are currently focused on.

## Features

Tired of navigating your source tree or explorer and want to quickly open the coverage html file for the active file you are editing?

This extension is for you!

## Keybindings

* `<cmd/ctrl/meta>+shift+c` - Opens the coverage file for the active file or the root coverage file if there are no active editors.

## Extension Settings

* `open-coverage-file.coverageDir`: Location of the `coverage/lcov-dir` directory

## Known Issues

* There is an issue opening files from wsl if the file is not located on a windows path. See https://github.com/sindresorhus/open/issues/174

## Release Notes

### 1.0.0

Initial release of open-coverage-file.