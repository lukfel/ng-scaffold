# Documentation
## Introduction

This Angular library provides a foundational scaffold for modern web and mobile applications. It includes essential UI elements such as a header, sidebar, drawer, footer, floating button, and built-in services for theme switching, snackbar notifications, dialog management, and breakpoint detection. Simply wrap your `router-outlet` with the `lf-scaffold` element and configure the `ScaffoldConfig` within the `ScaffoldService`.

- **NPM**: [@lukfel/scaffold](https://www.npmjs.com/package/@lukfel/scaffold)
- **Demo**: [lukfel.github.io/scaffold](https://lukfel.github.io/scaffold)
- **Examples**: [Create a Tournament](https://www.create-a-tournament.com), [What a Waste](https://www.what-a-waste.at)




## Installation
Install the package using npm:

```sh
npm install @lukfel/scaffold
```




## Module
Import the `ScaffoldModule` into your `app.module.ts` file.

**Note (Optional):** The library includes a built-in logging service called `Logger`, which logs library events when a `LibraryConfig` is provided, and `production` is set to `false`. Logging is automatically disabled in production mode.

```ts
import { ScaffoldModule } from '@lukfel/scaffold';
import { environment as env } from 'src/environments/environment';

imports: [
  ScaffoldModule.forRoot({ production: env.production })    // Omit .forRoot(...) if logging is not required
],
```




## Styling
Import the styles in your `styles.scss` and apply a default theme.

**Note:** The library’s styles include Material icons and Roboto font styles.

```scss
@use "@lukfel/scaffold/styles" as lf;
@include lf.scaffold-theme();           // include a default theme
```

### Custom Themes (Optional)
To customize the default theme, define a new theme map specifying `primary`, `accent`, and `warn` colors using Material palettes. Enabling the `dark` option applies a dark theme. Pass your custom theme to `lf.scaffold-theme($my-theme)`.

```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$my-theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false
);

@include lf.scaffold-theme($my-theme);
```

### Multiple Themes (Optional)
To switch between multiple themes dynamically, define additional themes using `lf.scaffold-colors($theme, 'theme-class')`, then apply the class to the `<body>` tag.

**Note:** The `ThemeService` allows dynamic theme switching.

```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$my-theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false
);

$my-theme2: (
  primary: mat.define-palette(mat.$purple-palette),
  accent: mat.define-palette(mat.$amber-palette),
  dark: false
);

@include lf.scaffold-theme($my-theme);                      // Set the primary theme with lf.scaffold-theme(...)
@include lf.scaffold-colors($my-theme2, 'my-theme2');       // Set additional themes with lf.scaffold-colors(...)
```

### Custom Typography (Optional)
To change the default typography from Roboto, pass an additional parameter ``font-family`` in the theme map.

**Note:** Don't forget to also import and set the font-family in the styles.

```scss
@use "@lukfel/scaffold/styles" as lf;
@use '@angular/material' as mat;

$my-theme: (
  primary: mat.define-palette(mat.$pink-palette),
  accent: mat.define-palette(mat.$blue-palette),
  warn: mat.define-palette(mat.$red-palette),
  dark: false,
  font-family: 'Comic Sans'
);

@include lf.scaffold-theme($my-theme); 

body {
    font-family: "Comic Sans MS" !important;
}
```




## Template
Wrap your application’s content inside the `lf-scaffold` component in `app.component.html`.

```html
<lf-scaffold>
  <!-- optional drawer content (content that is placed inside the left drawer if enabled) -->
  <ng-container drawerContent></ng-container>
  <router-outlet></router-outlet>
</lf-scaffold>
```




## Configuration
Import the `ScaffoldService` in `app.component.ts` to manage the `ScaffoldConfig` settings.

```ts
import { ScaffoldService } from '@lukfel/scaffold';

export class AppComponent {
  constructor(private scaffoldService: ScaffoldService) {}
}
```

### Update Configuration
Define the `ScaffoldConfig` in `app.component.ts` and update the `scaffoldConfig` property in `ScaffoldService`.

**Notes:**
- If a sub-configuration (e.g., `headerConfig`) is missing or does not have `enable: true`, the corresponding UI element will not be displayed.
- Refer to the demo project for full configuration details.

```ts
import { ScaffoldService, ScaffoldConfig } from '@lukfel/scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    scrollPositionRestoration: true,
    headerConfig: { enable: true, title: 'Scaffold', subtitle: 'by Lukas Felbinger' },
    navbarConfig: { enable: true },
    footerConfig: { enable: true, copyright: '© Lukas Felbinger 2023' },
    floatingButtonConfig: { enable: true }
  };

  constructor(private scaffoldService: ScaffoldService) {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }
}
```




## Events
There are two ways to listen to scaffold user events (button clicks, input changes, ...):

### Option 1 (Recommended) – Subscribe to Observables
```ts
constructor(private scaffoldService: ScaffoldService, private router: Router) {
  // Listen to click events (header menu and navbar buttons - click)
  this.scaffoldService.buttonClickEventValue$.subscribe((id: string) ={
    this.router.navigate([id]);
  });

  // Listen to header input change events (header input field - change)
  this.scaffoldService.headerInputChangeValue$.subscribe((value: string) ={
    ...
  });
}
```

### Option 2 – Use Output Events
```html
<lf-scaffold
  (headerButtonClickEvent)="headerButtonClickEvent($event)"
  (headerInputSubmitEvent)="headerInputSubmitEvent($event)"
  (headerInputChangeEvent)="headerInputChangeEvent($event)"
  (navbarButtonClickEvent)="navbarButtonClickEvent($event)">
  <router-outlet></router-outlet>
</lf-scaffold>
```

```ts
// Listen to header click events (header menu buttons - click)
public headerButtonClickEvent(id: string): void {
  this.router.navigate([id]);
}

// Listen to header input submit events (header input field - submit)
public headerInputSubmitEvent(value: string): void {
  ...
}

// Listen to header input change events (header input field - change)
public headerInputChangeEvent(value: string): void {
  ...
}

// Listen to navbar click events (navbar menu buttons - click)
public navbarButtonClickEvent(id: string): void {
  this.router.navigate([id]);
}
```




## Additional Services
This library includes several utility services:

- **`Logger`** – Development-only logging
- **`SnackbarService`** – Display snackbar notifications
- **`DialogService`** – Display custom dialogs
- **`BreakpointService`** – Detect screen breakpoints
- **`ThemeService`** – Manage themes dynamically
- **`RouterService`** – Track route changes and retreive route history
- **`SeoService`** – Manage meta tags
- **`LocalStorageService`** – Handle local storage

### Logger
This service only logs out information if you set ``ScaffoldModule.forRoot( { production: env.production } )`` where the ``production`` property must be ``false`` (no console logging in production mode).
```ts
import { Logger } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private logger: Logger) {}
  
  // Generic api call with logging
  public apiCallWithLogging(): void {
    this.apiService.apiCall().then(result ={
      this.logger.log(result);
    }).catch(error ={
      this.logger.error(error);
    });
  }
}
```

### SnackbarService
This service provides basic methods to display a simple snackbar with or without an action.
```ts
import { SnackbarService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private snackbarService: SnackbarService) {}
  
  // Generic api call with snackbar response
  public apiCallWithSnackbarResponse(): void {
    this.apiService.apiCall().then(result ={
      this.snackbarService.openSnackbar('Call was successful');
    }).catch(error ={
      this.snackbarService.openSnackbar('Call was not successful');
    });
  }
}
```

### DialogService
This service provide a basic confirmation dialog with a ``boolean`` response. Additionally you can use the method `openCustomDialog` to pass your own dialog template and config.
```ts
import { DialogService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private dialogService: DialogService) {}
  
  // Generic api call with a subsequent confirmation dialog
  public apiCallWithDialogConfirmation(): void {
    this.dialogService.openConfirmDialog('Do you really want to make this api call?').then(response ={
      // If the user confirmed the dialog, go through with the api call
      if(response === true) {
        this.apiService.apiCall().then(result ={
          ...
        }).catch(error ={
          ...
        }); 
      }
    });
  }
}
```

### BreakpointService
This service allows you to subscribe to breakpoint changes and act accordingly.
```ts
import { BreakpointService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private breakpointService: BreakpointService) {
    this.breakpointService.breakpoint$.subscribe((result: BreakpointState) ={
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
    });
  }
}
```

### ThemeService
This service allows you to dynamically change between your defined themes.

**Note:** The theme must be defined and included in your styles [see multiple themes](#multiple-themes-optional)

```ts
import { ThemeService } from '@lukfel/scaffold';

export class AppComponent {

  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('my-theme2', true);    // the second parameter allows to persists the theme in the LocalStorage (using the built in LocalStorageService)
  }
}
```