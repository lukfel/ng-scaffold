import { MenuButton } from './menu-button.model';

export interface NavbarConfig {
  enable?: boolean;
  showAllLabels?: boolean;
  menuButtons?: MenuButton[];
  cssClass?: string;
}
