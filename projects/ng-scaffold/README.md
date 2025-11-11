# Documentation
## Introduction

This Angular library provides a foundational scaffold for modern web and mobile applications. It includes essential UI elements such as a header, sidebar, drawer, footer, floating button, and built-in services for theme switching, snackbar notifications, dialog management, and breakpoint detection. Simply wrap your `router-outlet` with the `lf-scaffold` element and configure the `ScaffoldConfig` within the `ScaffoldService`.

- **NPM**: [@lukfel/ng-scaffold](https://www.npmjs.com/package/@lukfel/ng-scaffold)
- **Demo**: [lukfel.github.io/ng-scaffold](https://lukfel.github.io/ng-scaffold)
- **Examples**: [Uglygotchi](https://www.uglygotchi.at), [What a Waste](https://www.what-a-waste.at), [Create a Tournament](https://www.create-a-tournament.com), [Wowen](https://www.wowen.at)




## Installation
Install the package using npm:

```sh
npm install @lukfel/ng-scaffold
```




## Module
Import the `ScaffoldModule` into your `app.module.ts` file.

* **Note:** (Optional) The library includes a built-in logging service called `Logger`, which logs library deugging events when a `ScaffoldLibraryConfig` is provided and `debugging` is set to `true`. Logging is automatically disabled in production mode when `production` is set to `true`.

```ts
import { ScaffoldModule } from '@lukfel/ng-scaffold';
import { isDevMode } from '@angular/core';

@NgModule({
  ...
  imports: [
    ScaffoldModule.forRoot({ production: !isDevMode(), debugging: isDevMode() }),    // Omit .forRoot(...) if logging is not required
  ]
})
export class AppModule { }
```




## Styling
Import the styles in your `styles.scss` and apply a default theme.

* **Note:** The library’s styles include Material icons and Roboto font styles.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
@include lf.scaffold-theme();           // include a default theme
```

### Custom Themes (Optional)
To customize the default theme, define a new theme map specifying `primary`, `accent`, and `warn` colors using Material palettes. Enabling the `dark` option applies a dark theme. Pass your custom theme to `lf.scaffold-theme($my-theme)`.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
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
To switch between multiple themes dynamically, define additional themes using `lf.scaffold-colors($theme, 'theme-class')`, then apply the class to the `<body class="theme-class">` tag.

* **Note:** The `ThemeService` allows dynamic theme switching.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
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

* **Note:** Don't forget to also import and set the font-family in the styles.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
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
  <!-- (Optional) drawer content shows inside the left drawer if enabled -->
  <ng-container drawerContent></ng-container>
  <router-outlet></router-outlet>
</lf-scaffold>
```




## Configuration
Import the `ScaffoldService` in `app.component.ts` to manage the `ScaffoldConfig` settings.

```ts
import { ScaffoldService } from '@lukfel/ng-scaffold';

export class AppComponent {
  constructor(private scaffoldService: ScaffoldService) {}
}
```

### Initialize Configuration
Define the `ScaffoldConfig` in your `app.component.ts` and initialize the `scaffoldConfig` property in `ScaffoldService`.

* **Notes:**
    * If a sub-configuration (e.g. `headerConfig`) is missing or does not have `enable: true`, the corresponding UI element will not be displayed.

```ts
import { ScaffoldService, ScaffoldConfig } from '@lukfel/ng-scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    scrollPositionRestoration: true,
    headerConfig: { enable: true, title: 'Scaffold', subtitle: 'by Lukas Felbinger' },
    navbarConfig: { enable: true },
    footerConfig: { enable: true, copyright: '© Lukas Felbinger 2025' },
    floatingButtonConfig: { enable: true }
  };

  constructor(private scaffoldService: ScaffoldService) {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }
}
```

### Update Configuration (immutable, partial)
The `ScaffoldService` provides a method `updateScaffoldProperty()` to partially update the `ScaffoldConfig` in a type-safe way. It performs an immutable update, creating a new configuration object with the updated property and emits the new state.

```ts
import { ScaffoldService, DrawerConfig } from '@lukfel/ng-scaffold';

export class AppComponent {

  constructor(private scaffoldService: ScaffoldService) {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }

  public toggleDrawer(): void {
    const currentDrawerConfig: DrawerConfig = this.scaffoldService.scaffoldConfig.drawerConfig;
    const updatedDrawerConfig: DrawerConfig = { ...currentDrawerConfig, open: !currentDrawerConfig.open };
    this.scaffoldService.updateScaffoldProperty('drawerConfig', updatedDrawerConfig);
  }
}
```




## Events
There are two ways to listen to scaffold user events (button clicks, input changes, ...):

### Option 1 (Recommended) – Subscribe to Observables
Subscribe to the event Observables and listen to changes
```ts
constructor(private scaffoldService: ScaffoldService, private router: Router) {
  // Listen to click events (header menu and navbar buttons - click)
  this.scaffoldService.buttonClickEventValue$.subscribe((id: string) => {
    this.router.navigate([id]);
  });

  // Listen to header input change events (header input field - change)
  this.scaffoldService.headerInputChangeValue$.subscribe((value: string) => {
    ...
  });
}
```

### Option 2 – Use Output Events
Specify the needed output events and call custom methods
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
- **`RouterService`** – Track route changes and retrieve route history
- **`SeoService`** – Manage meta tags
- **`LocalStorageService`** – Handle local storage

### Logger
Logs internal library information if `debugging` is `true` and hides application logs during production if `production` is `true`.
* **Note:** `ScaffoldLibraryConfig` must be set during initialization ``ScaffoldModule.forRoot( { production: !isDevMode(), debugging: isDevMode() } )``

```ts
import { Logger } from '@lukfel/ng-scaffold';

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

### SnackbarService
Provides basic methods to display simple snackbar notifications with or without actions.

```ts
import { SnackbarService } from '@lukfel/ng-scaffold';

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

### DialogService
Includes a basic confirmation dialog thar returns a `Promise`. Use the method `openCustomDialog` to pass your own dialog template and config.

```ts
import { DialogService } from '@lukfel/ng-scaffold';

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

### BreakpointService
Allows you to subscribe to breakpoint changes.

```ts
import { BreakpointService } from '@lukfel/ng-scaffold';

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
    });
  }
}
```

### ThemeService
Dynamically change between your defined themes.

* **Note:** The theme must be defined and included in your styles

```ts
import { ThemeService } from '@lukfel/ng-scaffold';

export class AppComponent {

  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('my-theme2', true);    // the second parameter allows to persists the theme in the LocalStorage (using the built in LocalStorageService)
  }
}
```




## Standalone Components
In addition to the components provided by default by the the `ScaffoldModule` there are several standalone components that can be utilized.

* **Note:** Standalone components must be imported manually and are not part of the `ScaffoldModule` import

### List
A flexible, Material Design–inspired list and table hybrid component for displaying structured collections of items. It supports avatars, titles, subtitles, actions, and selection checkboxes — making it ideal for dashboards, inventories, and administrative views.

```ts
import { ListComponent } from '@lukfel/ng-scaffold';
```

```ts
import { Button, ListConfig, ListHeader, ListItem } from '@lukfel/ng-scaffold';

public listConfig: ListConfig = {
  enableSelection: true,
  enableDragging: true,
  initialSortToken: 'title',
  initialSortAsc: true,
  showDividers: true
}

public listHeader: ListHeader = {
  matIcon: 'sort',
  items: [
    { title: 'Items', sortToken: 'title' }
  ]
};

public listItems: ListItem[] = [
  { id: 1, svgIcon: 'logo', title: 'Item 2', subtitle: 'I am disabled', disabled: true },
  { id: 0, avatar: 'assets/img/logos/ic_launcher-web.png', title: 'Item 1', subtitle: 'I am clickable', clickable: true },
  { id: 2, matIcon: 'person', title: 'Item 3', subtitle: 'I have no edit buton', hiddenButtonIds: ['edit'] },
];

public buttons: Button[] = [
  { id: 'edit', matIcon: 'edit' },
  { id: 'delete', matIcon: 'delete', cssClass: 'warn' }
];

// Handle sort events (optional)
public onListSortChange(event: { sortToken: string, sortAsc: boolean }): void {
  if (event?.sortToken === 'title') {
    this.listItems.sort((a, b) => {
      if (!a.title || !b.title) return 0;
      if (event.sortAsc) return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
  }
}

public onListSelectionChange(items: ListItem[]): void {
  // handle selection change
}

public onListButtonClick(event: { buttonId: string, item: ListItem }): void {
  // handle button click
}

public onListItemClick(item: ListItem): void {
  // handle item click
}
```

```html
<lf-list
  [config]="listConfig"
  [header]="listHeader"
  [items]="listItems"
  [buttons]="listButtons"
  (sortChangeEvent)="onListSortChange($event)"
  (selectionChangeEvent)="onListSelectionChange()"
  (buttonClickEvent)="onListButtonClick($event)"
  (itemClickEvent)="onListItemClick($event)"></lf-list>
```

### File-Upload
A lightweight Angular component that provides a clean, Material Design–styled button for selecting and uploading files. It wraps a hidden native file input and exposes a simple, customizable interface with built-in icon, tooltip, and state management.

```ts
import { FileUploadComponent } from '@lukfel/ng-scaffold';
```

```ts
public onFileChange(file: File): void {
  // handle file upload
}
```

```html
<lf-file-upload
  color="accent"
  label="Upload File"
  matIcon="upload"
  [disabled]="false"
  accept="*"
  (fileChangeEvent)="onFileChange($event)"></lf-file-upload>
```

### Placeholder
A versatile UI component designed to display an informative placeholder or empty state when no data is available. It provides a structured layout for an icon, heading, message, and optional action — helping guide users toward the next step.

```ts
import { PlaceholderComponent } from '@lukfel/ng-scaffold';
```

```ts
import { PlaceholderConfig } from '@lukfel/ng-scaffold';

public placeholderConfig: PlaceholderConfig = {
  matIcon: 'widgets',
  title: 'Title',
  message: 'This is a placeholder message.',
  button: {
    id: 'placeholder',
    label: 'ACTION'
  }
}

public onPlaceholderButtonClick(): void {
  // handle placeholder click
}
```

```html
<lf-placeholder
  [placeholderConfig]="placeholderConfig"
  (buttonClickEvent)="onPlaceholderButtonClick()"></lf-placeholder>
```




## Interceptors
Intercept HTTP Calls and automatically show a loading spinner.

* **Note:** The loading spinner can also be manually shown by udpating the value for `scaffoldConfig.loading` in the `ScaffoldService`

```ts
import { ScaffoldLoadingInterceptor, ScaffoldModule } from '@lukfel/ng-scaffold';
import { isDevMode } from '@angular/core';

@NgModule({
  ...
  imports: [
    ScaffoldModule.forRoot({ production: !isDevMode(), debugging: isDevMode() }),    // Omit .forRoot(...) if logging is not required
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ScaffoldLoadingInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
```