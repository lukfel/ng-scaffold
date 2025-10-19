export interface ListItem {
  id?: string | number;
  avatarUrl?: string;
  title: string;
  subtitle?: string;
  checked?: boolean;
  hiddenActions?: string[];
  disabledActions?: string[];
}

export interface ListAction {
  id: string;
  matIcon?: string;
  svgIcon?: string;
  tooltip?: string;
  color?: 'primary' | 'accent' | 'warn';
  disabled?: boolean;
}