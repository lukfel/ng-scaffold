# Documentation
## Introduction
This Angular library provides a basic scaffold for modern web and mobile applications and includes ui elements such as header, sidebar, drawer, footer, to-top button etc as well as basic services to display snackbars and dialogs. Simply wrap your ``router-outlet`` with the ``lf-scaffold`` element and start configuring the ``ScaffoldConfig`` in the `ScaffoldService` store.

* Demo https://lukfel.github.io/scaffold

## Setup
### Installation
Install the npm package ``npm install @lukfel/scaffold``.

### Module
Import the module ``ScaffoldModule`` in your ``app.module.ts``.
* Hint: The library has a built in logger service ``Logger`` which logs certain events if a ``LibraryConfig`` is passed and the property ``production`` is to ``false`` (no logging in production mode).
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
Import the styles ``@lukfel/scaffold/styles`` on top of your ``styles.scss``.
* Hint: The styles also include material icons and the roboto font.
```scss
@use "@lukfel/scaffold/styles" as lf;
...
```

### Template
Add the ``lf-scaffold`` element to your ``app.component.html``.
```html
<lf-scaffold>
  <router-outlet></router-outlet>
</lf-scaffold>
```

### Config
Import the ``ScaffoldService`` in your ``app.component.ts``.
* Hint: The ``ScaffoldService`` is the global store of the library. With this service you can change the ``ScaffoldConfig`` and subscribe to the `Observable` to detect changes.
```ts
import { ScaffoldService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private scaffoldService: ScaffoldService) {}

}
```

Create the ``ScaffoldConfig`` object in your ``app.component.ts`` and set it in the ``ScaffoldService``.
* Hint: If a sub config (e.g. ``headerConfig``) is not defined within the ``ScaffoldConfig`` or doesn't have the property ``enable: true``, the corresponding ui element won't be displayed.
```ts
import { ScaffoldService, ScaffoldConfig } from '@lukfel/scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    loading: false,
    scrollPositionRestoration: true,
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
    // NavbarConfig
    navbarConfig: {
      enable: true,
      showAllLabels: true,
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
    // Set the new scaffoldConfig in the global store
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }

}
```

### Events
To listen to scaffold user events, add the output events and define the corresponding methods in your ``app.component.ts``.
```html
<lf-scaffold
  (headerClickEvent)="headerClickEvent($event)"
  (headerSubmitEvent)="headerSubmitEvent($event)"
  (headerInputEvent)="headerInputEvent($event)"
  (navbarClickEvent)="navbarClickEvent($event)">
  <!-- drawer content (content that is placed in the left drawer if enabled) -->
  <ng-container drawerContent></ng-container>
  <!-- main content -->
  <router-outlet></router-outlet>
</lf-scaffold>
```

```ts
// Listen to header click events (header menu buttons - click)
public headerClickEvent(id: string): void {
  ...
}

// Listen to header input submit events (header input field - submit)
public headerSubmitEvent(value: string): void {
  ...
}

// Listen to header input change events (header input field - change)
public headerInputEvent(value: string): void {
  ...
}

// Listen to navbar click events (navbar menu buttons - click)
public navbarClickEvent(id: string): void {
  ...
}
```

### Additional Services
The library provides additional commonly needed services.

#### Logger
This service only logs out information if you set ``ScaffoldModule.forRoot( { production: env.production } )`` where the ``production`` property must be ``false`` (no console logging in production mode).
```ts
import { Logger } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private logger: Logger) {}
  
  // Generic api call with logging
  public apiCallWithLogging(): void {
    this.apiService.apiCall().then(result => {
      this.logger.log(result);
    }).catch(error => {
      this.logger.error(error);
    });
  }
}
```

#### SnackbarService
This service provides basic methods to display a simple snackbar with or without an action.
```ts
import { SnackbarService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private snackbarService: SnackbarService) {}
  
  // Generic api call with snackbar response
  public apiCallWithSnackbarResponse(): void {
    this.apiService.apiCall().then(result => {
      this.snackbarService.openSnackbar('Call was successful');
    }).catch(error => {
      this.snackbarService.openSnackbar('Call was not successful');
    });
  }
}
```

#### DialogService
This service provide a basic confirmation dialog with a ``boolean`` response. Additionally you can use the method `openCustomDialog` to pass your own dialog template and config.
```ts
import { DialogService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private dialogService: DialogService) {}
  
  // Generic api call with a subsequent confirmation dialog
  public apiCallWithDialogConfirmation(): void {
    this.dialogService.openConfirmDialog('Do you really want to make this api call?').then(response => {
      // If the user confirmed the dialog, go through with the api call
      if(response === true) {
        this.apiService.apiCall().then(result => {
          ...
        }).catch(error => {
          ...
        }); 
      }
    });
  }
}
```

#### BreakpointService
This service allows you to subscribe to breakpoint changes and act accordingly
```ts
import { BreakpointService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      // Check which breakpoint is active
      if (result.breakpoints[Breakpoints.XSmall]) {
        ...
      } else if (result.breakpoints[Breakpoints.Small]) {
        ...
      } else if (result.breakpoints[Breakpoints.Medium]) {
        ...
      } else if (result.breakpoints[Breakpoints.Large]) {
        ...
      }
    }
  }
}
```
