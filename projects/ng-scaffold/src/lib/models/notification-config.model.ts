import { Button } from './menu-button.model';

export interface NotificationConfig {
  color?: 'primary' | 'accent' | 'warn';
  title?: string;
  message?: string;
  link?: string;
  routerLink?: string;
  linkText?: string;
  matIcon?: string;
  svgIcon?: string;
  button?: Button;
  closeButton?: Button;
  static?: boolean;
  compact?: boolean;
  gradient?: boolean;
  loading?: boolean;
  cssClass?: string;
}
