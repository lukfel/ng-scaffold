import { MenuButton } from './menu-button.model';

export interface HeaderConfig {
  enable?: boolean;
  loading?: boolean;
  showRouteLoading?: boolean;
  imgLogo?: string;
  svgLogo?: string;
  title?: string;
  subtitle?: string;
  titleRouterLink?: string;
  leftMenuButton?: MenuButton;
  rightMenuButtons?: MenuButton[];
  gradient?: boolean;
  cssClass?: string;
  responsiveConfig?: HeaderResponsiveConfig;
  inputConfig?: HeaderInputConfig;
}

export interface HeaderResponsiveConfig {
  enable?: boolean;
  matIcon?: string;
  svgIcon?: string;
  label?: string;
  excludeButtonIds?: string[];
}

export interface HeaderInputConfig {
  enable?: boolean;
  label?: string;
  matIconSubmit?: string;
  hint?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}
