Fixes after Material 3 integration (running Material 2 & 3 simultaneously with switch)
* Fix all hard-coded "white" foreground values with something like "var(--mat-sys-on-primary, white)" where the fallback on Material 2 will be white and on Material 3 it will be a primary palette tone
* Fix hard-coded white/grayish backgrounds and use proper --mat-sys-surface-container-low - --mat-sys-surface-container-high values (for example the content-title-card has var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low)) but the navbar has var(--mat-app-background-color, var(--mat-sys-background, transparent)) and the mat-sidennav has var(--mat-sidenav-container-background-color, var(--mat-sys-surface))) so should these be more base on elevation how low/high their tone is? Also always fallback for Material 2
* Bottom-bar not has var(--mat-sys-tertiary) for background-color also on Material 2 (used to be accent 500 colour like floating action button)


Fixes for pre-existing findings
* The split floating-action-button on Material 2 seems 5 pixel wider with label, probably because label has to much spacing to divider on its right side