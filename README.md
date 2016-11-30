# Angular Quick QuickStart

This is a fork of Angular's quickstart tutorial. This version is stripped down even more by removing all the **test packages and files** that are sprinkled all throughout the original quickstart. 

Build a project with the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Prerequisites

Node.js v4 and npm v3
    
## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/KokoDoko/quickstart  my-proj
cd my-proj
```
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.
