import { NavigationLink } from './navigation-link.model';

export interface FooterConfig {
  enable?: boolean;
  svgLogo?: string;
  imgLogo?: string;
  copyright?: string;
  links?: NavigationLink[];
  cssClass?: string;
}
