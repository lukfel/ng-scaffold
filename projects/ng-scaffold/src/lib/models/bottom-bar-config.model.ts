import { Button } from './menu-button.model';

export interface BottomBarConfig {
  enable?: boolean;
  closeButtonId?: string;
  message?: string;
  buttons?: Button[];
  cssClass?: string;
}
