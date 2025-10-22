export interface MenuButton extends Button {
  menuButtons?: Button[];
}

export interface Button {
  id: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  tooltip?: string;
  disabled?: boolean;
  class?: string;
}