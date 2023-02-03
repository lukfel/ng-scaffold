# Documentation
## Introduction
This library provides a basic scaffold for modern web and mobile applications including ui elements such as header, sidebar, drawer, footer, to-top button etc. Simply wrap your ``router-outlet`` with the ``lf-scaffold`` element and start configuring the ``ScaffoldConfig``.

* Demo https://lukfel.github.io/scaffold

## Setup
### Installation
Install the npm package with ``npm install @lukfel/scaffold``.

### Module
Import the module ``ScaffoldModule`` in your ``app.module.ts``.
* Hint: The library has a built in logger service ``Logger`` which logs certain events if a ``LibraryConfig`` is passed and the property ``production`` is set to ``false``.
```ts
import { ScaffoldModule } from '@lukfel/scaffold';
import { environment as env } from 'src/environments/environment';

imports: [
  ...
  // omit '.forRoot( { production: env.production } )' if you don't need the logger
  ScaffoldModule.forRoot( { production: env.production } )
],
```

### Style
Import the styles ``@lukfel/scaffold/styles`` in your ``styles.scss``.
* Hint: You can override styles and classes after the import.
```scss
@use "@lukfel/scaffold/styles" as lf;
```

### Template
Add the container ``lf-scaffold`` to your ``app.component.html``.
```html
<lf-scaffold>
  <router-outlet></router-outlet>
</lf-scaffold>
```

### Config
Import the ``ScaffoldService`` in your ``app.component.ts``.
* Hint: The ``ScaffoldService`` is the global store of the library. You can subscribe to its `Observable` to detect changes.
```ts
import { ScaffoldService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private scaffoldService: ScaffoldService) {}

}
```

Create the ``ScaffoldConfig`` object in your ``app.component.ts`` and store it in the global ``ScaffoldService``.
* Hint: If a sub config (e.g. ``headerConfig``) is not defined within the ``ScaffoldConfig`` or doesn't have the property ``enable: true``, the corresponding ui element won't be displayed.
```ts
import { ScaffoldService, ScaffoldConfig } from '@lukfel/scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    loading: false,
    // HeaderConfig
    headerConfig: {
      enable: true,
      svgLogo: 'lf_logo',
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
          id: 'item1',
          label: 'Item 1'
        },
        {
          id: 'item2',
          label: 'Item 2'
        },
        {
          id: 'github',
          svgIcon: 'github_logo',
          outlineIcon: true,
          tooltip: 'GitHub'
        }
      ],
      inputConfig: {
        enable: true,
        label: 'Search',
        matIcon: 'search'
      }
    },
    // SidenavConfig
    sidenavConfig: {
      enable: true,
      menuButtons: [
        {
          id: 'start',
          matIcon: 'home',
          label: 'Home',
          outlineIcon: true
        },
        {
          id: 'documentation',
          matIcon: 'description',
          label: 'Docu',
          outlineIcon: true
        },
        {
          id: '404',
          matIcon: 'block',
          label: '404',
          outlineIcon: true
        }
      ]
    },
    // DrawerConfig
    drawerConfig: {
      enable: true,
      open: false,
      fixed: true
    },
    // FooterConfig
    footerConfig: {
      enable: true,
      logo: 'lf_logo',
      links: [
        {
          label: 'About',
          href: 'https://www.lukasfelbinger.at',
          externalTab: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lukfel/scaffold',
          externalTab: true
        },
      ],
      copyright: '© Lukas Felbinger 2023. All rights reserved.'
    },
    // ToTopButtonConfig
    toTopButtonConfig: {
      enable: true,
      tooltip: 'To top'
    }
  }

  constructor(private scaffoldService: ScaffoldService) {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }

}
```

### Events
To listen to scaffold events, add the output events and define the corresponding methods in your ``app.component.ts``.
```html
<lf-scaffold
  (headerClickEvent)="headerClickEvent($event)"
  (headerSubmitEvent)="headerSubmitEvent($event)"
  (headerInputEvent)="headerInputEvent($event)"
  (sidenavClickEvent)="sidenavClickEvent($event)">
  <!-- drawer content -->
  <ng-container drawerContent></ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-scaffold>
```

```ts
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
