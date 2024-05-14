export interface FloatingButtonConfig {
  enable?: boolean;
  id?: string;
  label?: string;
  matIcon?: string;
  svgIcon?: string;
  outlineIcon?: boolean;
  tooltip?: string;
  horizontalPosition?: 'left' | 'center' | 'right';
  BottomPositionPx?: number;
  autoHide?: boolean;
  class?: string;
}
