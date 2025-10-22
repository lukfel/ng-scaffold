export interface ListItem {
  id: string | number;
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  avatar?: string;
  title: string;
  subtitle?: string;
  checked?: boolean;
  hiddenActions?: string[];
  disabledActions?: string[];
}

export interface ListHeader {
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  avatar?: string;
  enableSorting?: boolean;
  enableSelection?: boolean;
  tokens?: string[];
}