import { Button } from './menu-button.model';

export interface BottomBarConfig {
  enable?: boolean;
  cssClass?: string;
  message?: string;
  closeButtonId?: string;
  buttons?: Button[];
}
