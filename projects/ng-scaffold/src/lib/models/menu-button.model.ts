export interface MenuButton extends Button {
  menuButtons?: Button[];
}

export interface Button {
  id: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  tooltip?: string;
  disabled?: boolean;
  class?: string;
}