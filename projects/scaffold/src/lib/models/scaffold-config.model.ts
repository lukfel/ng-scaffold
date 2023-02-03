import { DrawerConfig } from './drawer-config.model';
import { FooterConfig } from './footer-config.model';
import { HeaderConfig } from './header-config.model';
import { SidenavConfig } from './sidenav-config.model';
import { ToTopButtonConfig } from './to-top-button-config.model';

export interface ScaffoldConfig {
  loading?: boolean;
  headerConfig?: HeaderConfig;
  sidenavConfig?: SidenavConfig;
  drawerConfig?: DrawerConfig;
  footerConfig?: FooterConfig;
  toTopButtonConfig?: ToTopButtonConfig;
}
