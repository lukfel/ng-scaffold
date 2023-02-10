export interface MenuButton {
  id: string;
  matIcon?: string;
  svgIcon?: string;
  label?: string;
  outlineIcon?: boolean;
  tooltip?: string;
  class?: string;
  menuButtons?: MenuButton[];
}
