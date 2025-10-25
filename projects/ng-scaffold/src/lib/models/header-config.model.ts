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
  inputConfig?: HeaderInputConfig;
  cssClass?: string;
}

export interface HeaderInputConfig {
  enable?: boolean;
  label?: string;
  matIconSubmit?: string;
  // matIconPrefix?: string;
  hint?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}
