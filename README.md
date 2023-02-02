# Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Documentation
### Introduction
This library provides a basic scaffold for modern web and mobile applications including ui elements such as header, sidebar, drawer, footer, etc. Simply wrap your ``<router-outlet></router-outlet>`` with the ``<lf-container> ... </lf-container>`` element and pass the desired configs to personalize the scaffold.

* Demo page: 

### Setup
#### Installation
Install the npm package with ``npm install @lf/scaffold``

#### Module
Import the module in your ``app.module.ts`` (optionally pass the production boolean for the logger)
```.ts
import { ScaffoldModule } from '@lf/scaffold';
import { environment as env } from 'src/environments/environment';

imports: [
  ...
  // omit '.forRoot( { production: env.production } )' if you don't need the logger
  ScaffoldModule.forRoot( { production: env.production } )
],
```

#### Style
Import the styles in your ``styles.scss``
```.scss
@use "@lf/scaffold/styles" as lf;
```

#### Template
Add the container to your ``app.component.html``.
```.html
<lf-container>
  <router-outlet></router-outlet>
</lf-container>
```

To enable the ui elements within the scaffold, define the corresponding input configs. For example, to enable the ``HeaderComponent``, define and pass the ``headerConfig`` (see in section "Config" below).
```.html
<lf-container
  [containerConfig]="containerConfig"
  [headerConfig]="headerConfig"
  [sidenavConfig]="sidenavConfig"
  [drawerConfig]="drawerConfig"
  [footerConfig]="footerConfig"
  [toTopButtonConfig]="toTopButtonConfig">
  <!-- drawer content -->
  <ng-container drawerContent></ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-container>
```

#### Config
Create the input config objects in your ``app.component.ts``. If a config is not defined or doesn't have ``enable: true``, the corresponding ui element won't be displayed.
```.ts
import { ContainerConfig, DrawerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '@lf/scaffold';

...

export class AppComponent {

  public containerConfig: ContainerConfig = {
    loading: false
  }

  public headerConfig: HeaderConfig = {
    enable: true,
    logo: 'lf_logo',
    title: 'Scaffold',
    subtitle: 'by Lukas Felbinger',
    loading: false,
    showRouteLoading: true,
    leftMenuButton: {
      id: 'menu',
      matIcon: 'menu',
      outlineIcon: true,
      tooltip: 'Menu'
    },
    rightMenuButtons: [
      {
        id: 'home',
        label: 'Home'
      },
      {
        id: 'contact',
        label: 'Contact'
      },
      {
        id: 'settings',
        matIcon: 'settings',
        outlineIcon: true,
        tooltip: 'Settings'
      }
    ],
    inputConfig: {
      enable: true,
      label: 'Search',
      matIcon: 'search'
    }
  }

  public sidenavConfig: SidenavConfig = {
    enable: true,
    menuButtons: [
      {
        id: 'start',
        matIcon: 'home',
        label: 'Home',
        outlineIcon: true
      },
      {
        id: 'contact',
        matIcon: 'mail',
        label: 'Contact',
        outlineIcon: true
      },
      {
        id: '404',
        matIcon: 'block',
        label: '404',
        outlineIcon: true
      }
    ]
  }

  public drawerConfig: DrawerConfig = {
    enable: true,
    open: false,
    fixed: true
  }

  public footerConfig: FooterConfig = {
    enable: true,
    logo: 'lf_logo',
    links: [
      {
        label: 'Home',
        routerLink: 'start'
      },
      {
        label: 'About',
        href: 'https://www.lukasfelbinger.at',
        externalTab: true
      },
      {
        label: 'Contact',
        routerLink: 'contact'
      }
    ],
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    enable: true,
    tooltip: 'To top'
  }

}
```

#### Events
To listen to events within the scaffold, add the output events and define methods in your ``app.component.ts``.
```.html
<lf-container
  ...
  (headerClickEvent)="headerClickEvent($event)"
  (headerSubmitEvent)="headerSubmitEvent($event)"
  (headerInputEvent)="headerInputEvent($event)"
  (sidenavClickEvent)="sidenavClickEvent($event)">
  <!-- drawer content -->
  <ng-container drawerContent></ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-container>
```

```.ts
// Listen to header click events
public headerClickEvent(id: string): void {
  ...
}

// Listen to header input submit events
public headerSubmitEvent(value: string): void {
  ...
}

// Listen to header input change events
public headerInputEvent(value: string): void {
  ...
}

// Listen to sidenav click events
public sidenavClickEvent(id: string): void {
  ...
}
```

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
