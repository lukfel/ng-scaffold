import { NavigationLink } from './navigation-link.model';

export interface FooterConfig {
  enable?: boolean;
  imgLogo?: string;
  svgLogo?: string;
  copyright?: string;
  links?: NavigationLink[];
  cssClass?: string;
}
