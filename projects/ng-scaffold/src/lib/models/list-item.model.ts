import { Button } from './menu-button.model';

export interface ListItem {
  id: string | number;
  matIcon?: string;
  svgIcon?: string;
  avatar?: string;
  title: string;
  subtitle?: string;
  checked?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  buttons?: Button[];
  hiddenButtonIds?: string[];
  disabledButtonIds?: string[];
  data?: any[];
  cssClass?: string;
}

export interface ListHeader {
  matIcon?: string;
  svgIcon?: string;
  avatar?: string;
  enableSelection?: boolean;
  items?: HeaderItem[];
}

export interface HeaderItem {
  title: string;
  sortToken?: string;
}