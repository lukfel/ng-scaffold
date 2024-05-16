import { MenuButton } from './menu-button.model';

export interface BottomBarConfig {
  enable?: boolean;
  class?: string;
  message?: string;
  actions?: MenuButton[];
}
