import { NavigationLink } from './navigation-link.model';

export interface FooterConfig {
  show?: boolean;
  logo?: string;
  copyright?: string;
  links?: NavigationLink[];
}
