import { Button } from './menu-button.model';

export interface BottomBarConfig {
  enable?: boolean;
  class?: string;
  message?: string;
  buttons?: Button[];
}
