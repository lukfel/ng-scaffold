import { MenuButton } from './menu-button.model';

export interface HeaderConfig {
  enable?: boolean;
  svgLogo?: string;
  imgLogo?: string;
  title?: string;
  subtitle?: string;
  titleRouterLink?: string;
  loading?: boolean;
  showRouteLoading?: boolean;
  leftMenuButton?: MenuButton;
  rightMenuButtons?: MenuButton[];
  inputConfig?: HeaderInputConfig;
  class?: string;
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
