export interface ListItem {
  id: string | number;
  matIcon?: string;
  svgIcon?: string;
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
  avatar?: string;
  enableSorting?: boolean;
  enableSelection?: boolean;
  tokens?: string[];
}