import { Button } from './menu-button.model';

export interface NavbarConfig {
  enable?: boolean;
  showAllLabels?: boolean;
  buttons?: Button[];
  cssClass?: string;
}
