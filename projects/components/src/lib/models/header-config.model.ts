import { MenuButton } from './menu-button.model';

export interface HeaderConfig {
  show?: boolean;
  logo?: string;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  showRouteLoading?: boolean;
  leftMenuButton?: MenuButton;
  rightMenuButtons?: MenuButton[];
  inputConfig?: HeaderInputConfig;
}

export interface HeaderInputConfig {
  show?: boolean;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  showCloseButton?: boolean;
}
