Fixes after Material 3 integration (running Material 2 & 3 simultaneously with switch)


Fixes for pre-existing findings
* The split floating-action-button on Material 2 seems 5 pixel wider with label, probably because label has to much spacing to divider on its right side
* Split FAB divider is hard-coded #0000001f (almost invisible on M3 dark), maybe color-mix of currentColor