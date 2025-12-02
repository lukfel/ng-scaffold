import { BottomBarConfig } from './bottom-bar-config.model';
import { ContentTitleCardConfig } from './content-title-card-config.model';
import { DrawerConfig } from './drawer-config.model';
import { FloatingButtonConfig } from './floating-button-config.model';
import { FooterConfig } from './footer-config.model';
import { HeaderConfig } from './header-config.model';
import { LoadingOverlayConfig } from './loading-overlay-config.model';
import { NavbarConfig } from './navbar-config.model';

export interface ScaffoldConfig {
  loading?: boolean;
  scrollPositionRestoration?: boolean;
  anchorScrolling?: boolean;
  loadingOverlayConfig?: LoadingOverlayConfig;
  headerConfig?: HeaderConfig;
  navbarConfig?: NavbarConfig;
  drawerConfig?: DrawerConfig;
  footerConfig?: FooterConfig;
  contentTitleCardConfig?: ContentTitleCardConfig;
  floatingButtonConfig?: FloatingButtonConfig;
  bottomBarConfig?: BottomBarConfig;
  cssClass?: string;
}
