import { Button } from './menu-button.model';

export interface NotificationConfig {
  color?: 'primary' | 'accent' | 'warn';
  title?: string;
  message?: string;
  link?: string;
  linkText?: string;
  matIcon?: string;
  svgIcon?: string;
  button?: Button;
  static?: boolean;
  minimal?: boolean;
  gradient?: boolean;
  loading?: boolean;
  cssClass?: string;
}
