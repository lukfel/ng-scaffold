export interface MenuButton extends Button {
  menuButtons?: Button[];
  imgIcon?: string;
}

export interface Button {
  id: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  tooltip?: string;
  disabled?: boolean;
  cssClass?: string;
}