import { ComponentType } from '@angular/cdk/portal';

export interface LoadingOverlayConfig {
  gradient?: boolean;
  customComponent?: ComponentType<any>,
  cssClass?: string;
}
