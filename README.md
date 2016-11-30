# Angular 2 Typescript Quick-QuickStart

This is a fork of Angular's quickstart tutorial. This version is stripped down even more by removing all the **test packages and files** that are sprinkled all throughout the original quickstart. 

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

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, then opens a live browser
that updates when you save new changes. You can shut it down with `Ctrl-C`.

## Build Hello World

Open **app.component.ts** and edit the variable in the class:

 `export class AppComponent  { name = 'YourNameHere'; }` 

Save the typescript file and check if the compiler runs, and the browser window is refreshed!
If this works, you can follow the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html).
