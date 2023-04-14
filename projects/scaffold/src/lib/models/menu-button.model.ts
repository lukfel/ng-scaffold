export interface MenuButton {
  id: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  tooltip?: string;
  class?: string;
  menuButtons?: MenuButton[];
}
