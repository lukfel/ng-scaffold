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
  data?: any;
  cssClass?: string;
}

export interface ListHeader {
  matIcon?: string;
  svgIcon?: string;
  avatar?: string;
  items?: ListHeaderItem[];
  buttons?: Button[];
  enableSelection?: boolean;
  enableDragging?: boolean;
}

interface ListHeaderItem {
  title: string;
  sortToken?: string;
}