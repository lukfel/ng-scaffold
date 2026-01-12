# Documentation
## Introduction

This Angular library provides a foundational scaffold for modern web and mobile applications. It includes essential UI elements such as a header, sidebar, drawer, footer, floating button, and built-in services for theme switching, snackbar notifications, dialog management, and breakpoint detection. Simply wrap your `router-outlet` with the `lf-scaffold` element and configure the `ScaffoldConfig` within the `ScaffoldService`.

- **NPM**: [@lukfel/ng-scaffold](https://www.npmjs.com/package/@lukfel/ng-scaffold)
- **Demo**: [lukfel.github.io/ng-scaffold](https://lukfel.github.io/ng-scaffold)
- **Examples**: [Uglygotchi](https://www.uglygotchi.at), [What a Waste](https://www.what-a-waste.at), [Create a Tournament](https://www.create-a-tournament.com), [Wowen](https://www.wowen.at)




## Installation
Install the package using `npm install` or `ng add` (with experimental Angular schematics):

```sh
npm install @lukfel/ng-scaffold
```

```sh
ng add @lukfel/ng-scaffold
```

The ng add command will additionally try to perform the following actions:
* Import `ScaffoldComponent` in root
* Inject `ScaffoldService` and initialize `ScaffoldConfig`
* Wrap template with `<lf-scaffold>`
* Include styles


## Component
Import the `ScaffoldComponent` into your `app.module.ts` or `app.component.ts` (standalone).

```ts
import { ScaffoldComponent } from '@lukfel/ng-scaffold';

  ...
  imports: [
    ScaffoldComponent
  ]
```

### (Optional) Provider
The library uses the built-in logging service `Logger` to log debugging events when a `ScaffoldLibraryConfig` is provided and `debugging` is set to `true`. Logging is automatically disabled in production mode when `production` is set to `true`.

```ts
import { provideScaffold } from '@lukfel/ng-scaffold';
import { isDevMode } from '@angular/core';

  ...
  providers: [
    provideScaffold({
      production: !isDevMode(),
      debugging: isDevMode(),
      outlineIcons: true
    })
  ]
```




## Configuration
Import the `ScaffoldService` in `app.component.ts` to manage the `ScaffoldConfig`.

```ts
import { ScaffoldService } from '@lukfel/ng-scaffold';

export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    // Create your own config or generate it at https://lukfel.github.io/ng-scaffold
    headerConfig: { enable: true, title: 'Scaffold works!' }
  };

  constructor(private scaffoldService: ScaffoldService) {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }
}
```

### (Optional) Update Configuration
The `ScaffoldService` provides `updateScaffoldProperty()` to partially update the `ScaffoldConfig` in a type-safe way. It performs an immutable update, creating a new configuration object with the updated property and emits the new state.

```ts
import { ScaffoldService, DrawerConfig, HeaderConfig, MenuButton } from '@lukfel/ng-scaffold';

export class AppComponent {

  ...

  // Example #1: Toggle the drawer open state
  public toggleDrawer(): void {
    const open: boolean = this.scaffoldService?.scaffoldConfig?.drawerConfig?.open || false;
    this.scaffoldService.updateScaffoldProperty('drawerConfig', { open: !open });
  }

  // Example #2: Enable the header input field
  public enableHeaderInput(): void {
    this.scaffoldService.updateScaffoldProperty('headerConfig', inputConfig: { enable: true });
  }

  // Example #2: Add new button to navbar
  public addNavbarButton(button: MenuButton): void {
    const currentNavbarConfig: NavbarConfig = this.scaffoldService.scaffoldConfig.navbarConfig;
    this.scaffoldService.updateScaffoldProperty('navbarConfig', { menuButtons: [...currentNavbarConfig.menuButtons, button] });
  }
}
```




## Template
Wrap your application’s content inside the `lf-scaffold` component in `app.component.html`.

```html
<lf-scaffold>
  <ng-container drawerContent></ng-container>   <!-- (Optional) content projection for drawer -->
  <router-outlet></router-outlet>
</lf-scaffold>
```




## Styling
Import the styles in your `styles.scss` and apply the default theme.

* **Note:** The library’s styles include Material icons and Roboto font styles.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
@include lf.scaffold-theme();           // Include default theme
```

### (Optional) Custom Themes
To customize the default theme, define a new theme map specifying `primary`, `accent`, and `warn` colors using Material palettes. Enabling the `dark` option applies a dark theme. Pass your custom theme to `lf.scaffold-theme($my-theme)`.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

// Define theme (use Material palettes or create your own)
$base-theme: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  warn: mat.m2-define-palette(mat.$m2-red-palette),
  dark: false
);

@include lf.scaffold-theme($base-theme);
```

### (Optional) Multiple Themes
To switch between multiple themes dynamically, define additional themes using `lf.scaffold-colors($theme, 'theme-class')`, then apply the class to the `<body class="theme-class">` tag.

* **Note:** The `ThemeService` allows dynamic theme switching.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

// Define themes (use Material palettes or create your own)
$base-theme: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  warn: mat.m2-define-palette(mat.$m2-red-palette),
  dark: false
);

$theme2: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  dark: true
);

// Include themes (use ThemeService to switch between themes)
@include lf.scaffold-theme($base-theme);
@include lf.scaffold-colors($theme2, 'theme2');
```

### (Optional) Custom Typography
To change the default typography from Roboto, pass an additional parameter ``font-family`` in the theme map.

* **Note:** Don't forget to also import and set the font-family in the styles.

```scss
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

$base-theme: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  warn: mat.m2-define-palette(mat.$m2-red-palette),
  dark: false,
  font-family: 'Comic Sans'
);

@include lf.scaffold-theme($base-theme);

body {
    font-family: "Comic Sans MS" !important;
}
```




## Events
There are two ways to listen to scaffold user events (button clicks, input changes, ...):

### (Recommended) Option 1 – Subscribe to Event Observables
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




## (Optional) Additional Services
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
Logs information during development and hides all logs during production.

* **Note:** Use the provoder `provideScaffold({ production: !isDevMode() })` to disable logs in production

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




## (Optional) Standalone Components
In addition to the scaffold components provided by default by the the `ScaffoldComponent` there are several standalone components that can be utilized.

* **Note:** Standalone components must be imported manually and are not part of the `ScaffoldComponent` import

### List
A standalone Material Design inspired list and table hybrid component for displaying structured collections of items. It supports avatars, titles, subtitles, actions, selections and dragging — making it ideal for dashboards, inventories, and administrative views.

```ts
import { ListComponent } from '@lukfel/ng-scaffold';
```

```ts
import { Button, ListConfig, ListHeader, ListItem } from '@lukfel/ng-scaffold';

public listConfig: ListConfig = {   // (Optional) list config
  enableSelection: true,
  enableDragging: true,
  initialSortToken: 'title',
  initialSortAsc: true,
  showDividers: true
}

public listHeader: ListHeader = {   // (Optional) list header
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

public buttons: Button[] = [        // (Optional) list buttons
  { id: 'edit', matIcon: 'edit' },
  { id: 'delete', matIcon: 'delete', cssClass: 'warn' }
];

// (Optional) Handle sort events
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
A standalone Material Design styled button for selecting and uploading files. It wraps a hidden native file input and exposes a simple, customizable interface with built-in icon, tooltip, and state management.

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
  accept="*"
  (fileChangeEvent)="onFileChange($event)"></lf-file-upload>
```

### Color-Picker
A standalone Material Design styled button for picking colors. It wraps a hidden native color input and exposes a simple, customizable interface with built-in icon, tooltip, and state management.

```ts
import { ColorPickerComponent } from '@lukfel/ng-scaffold';
```

```ts
public onColorChange(color: string): void {
  // handle color pick
}
```

```html
<lf-color-picker
  color="accent"
  label="Pick Color"
  matIcon="color_lens"
  (colorChangeEvent)="onColorChange($event)"></lf-color-picker>
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




## (Optional) Interceptors
Intercept HTTP Calls and automatically show a loading spinner.

* **Note:** The loading spinner can also be manually shown by udpating the value for `scaffoldConfig.loading` in the `ScaffoldService`

```ts
import { ScaffoldLoadingInterceptor, ScaffoldComponent } from '@lukfel/ng-scaffold';
import { isDevMode } from '@angular/core';

  ...
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ScaffoldLoadingInterceptor,
      multi: true
    }
  ]
```