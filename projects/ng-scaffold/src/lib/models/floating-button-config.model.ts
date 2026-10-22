import { MenuButton } from './menu-button.model';

export interface FloatingButtonConfig {
  enable?: boolean;
  id?: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  tooltip?: string;
  disabled?: boolean;
  horizontalPosition?: 'center' | 'right';
  autoHide?: boolean;
  sticky?: boolean;
  cssClass?: string;
  secondaryButton?: MenuButton;
}
