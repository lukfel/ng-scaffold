import { ContentTitleCardConfig } from './content-title-card-config.model';
import { DrawerConfig } from './drawer-config.model';
import { FooterConfig } from './footer-config.model';
import { HeaderConfig } from './header-config.model';
import { NavbarConfig } from './navbar-config.model';
import { ToTopButtonConfig } from './to-top-button-config.model';

export interface ScaffoldConfig {
  loading?: boolean;
  scrollPositionRestoration?: boolean;
  headerConfig?: HeaderConfig;
  navbarConfig?: NavbarConfig;
  drawerConfig?: DrawerConfig;
  footerConfig?: FooterConfig;
  contentTitleCardConfig?: ContentTitleCardConfig;
  toTopButtonConfig?: ToTopButtonConfig;
}
