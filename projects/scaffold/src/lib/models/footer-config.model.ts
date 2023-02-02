import { NavigationLink } from './navigation-link.model';

export interface FooterConfig {
  enable?: boolean;
  logo?: string;
  copyright?: string;
  links?: NavigationLink[];
}
