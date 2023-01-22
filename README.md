# Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## TODO:
* Header - menu buttons
* Header - allow logo (image or svgIcon)
* Header - input field (search field)
* Header - mobile version
* Sidenav - mobile version
* Sidenav - active links
* Footer - overall styling
* MenuButtons - functionality for svg icons
* Library - styling overhaul (global variables)
* Library - services for dialogs and snackbars

__________

## Angular
* Reference: https://github.com/angular/angular-cli/wiki

### Requirements
* Node: https://nodejs.org/en/download/
* NPM: ``npm install npm@latest -g``

### Installation
* ``npm install -g @angular/cli``
* ``npm uninstall -g @angular/cli cache verify``

### Update
* ``ng update @angular/cli @angular/core``

### Create Project
* ``ng new [app] --prefix [lf] --style [scss] --routing --skipTests``

### Generate Route
* ``ng generate module [name] --route [route] --module app.module``

### Generate Library
* ``ng generate library [name] --prefix [lf]``

### Serve Project
* ``ng serve --host 0.0.0.0 --port 4200``

### Deployement
* ``ng build --configuration production``

### Testing
* ``ng test --browsers ChromeHeadless --code-coverage true --watch false``

__________

## Material (Design Language)
* Reference: https://material.angular.io/guide/getting-started

### Installation
* ``ng add @angular/material``

### Update
* ``ng update @angular/material``

### Optional
* ``npm install material-design-icons``
* ``npm install roboto-fontface``

__________

## Eslint
* Reference: https://github.com/angular-eslint/angular-eslint

### Installation
* ``ng add @angular-eslint/schematics``
* ``npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev``
* ``npm install eslint-plugin-unused-imports --save-dev``

__________

## AngularFire/Firebase (Serverless Backend)
* Reference: https://github.com/angular/angularfire

### Installation
* ``ng add @angular/fire``

### Update
* ``ng update @angular/fire``

### Deployement
* ``ng run [app]:deploy``
* Note: Hostable build is created in the folder "dist/"

### Optional
* ``npm install -g firebase-tools``

__________

## Service worker (PWA)
* Reference: https://angular.io/guide/service-worker-getting-started

### Installation
* ``ng add @angular/pwa --project [app]``

__________

## Husky (Git-hooks)
* Reference: https://github.com/typicode/husky

### Installation
* ``npm install husky --save-dev``

### Usage [package.json]
```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint && git add .",
    "pre-push": "npm run build"
  }
},
```

__________

## Scully (Static Pages)
* Reference: https://github.com/scullyio/scully

### Installation
* ``ng add @scullyio/init``

### Usage
* ``npm run scully``
