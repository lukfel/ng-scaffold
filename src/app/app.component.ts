import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { BreakpointService, CONFIG, DialogService, Logger, MenuButton, ScaffoldComponent, ScaffoldConfig, ScaffoldLibraryConfig, ScaffoldService, SeoService, ThemeService } from '@lukfel/ng-scaffold';
import packageJson from '../../package.json';
import { MaterialModule } from './shared/modules/material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ScaffoldComponent
  ]
})
export class AppComponent {

  private router = inject(Router);
  private logger = inject(Logger);
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });
  private scaffoldService = inject(ScaffoldService);
  private seoService = inject(SeoService);
  private themeService = inject(ThemeService);
  private dialogService = inject(DialogService);
  private breakpointService = inject(BreakpointService);


  public version = packageJson.version;

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    scrollPositionRestoration: true,
    // LoadingOverlayConfig
    loading: false,
    loadingOverlayConfig: {},
    // HeaderConfig
    headerConfig: {
      showRouteLoading: true,
      enable: true,
      svgLogo: 'logo',
      title: 'Angular Scaffold',
      subtitle: `v${packageJson.version}`,
      titleRouterLink: 'start',
      leftMenuButton: {
        id: 'drawer',
        matIcon: 'menu'
      },
      rightMenuButtons: [
        {
          id: 'start',
          label: 'Demo'
        },
        {
          id: 'components',
          label: 'Components'
        },
        {
          id: 'documentation',
          label: 'Docs'
        },
        {
          id: 'github',
          svgIcon: 'github_logo',
          tooltip: 'GitHub'
        },
        {
          id: 'npm',
          svgIcon: 'npm_logo',
          tooltip: 'NPM'
        }
      ],
      gradient: true,
      responsiveConfig: {
        enable: true
      },
      inputConfig: {
        enable: false,
        label: 'Search',
        matIconSubmit: 'search',
        autoFocus: false
      }
    },
    // NavbarConfig
    navbarConfig: {
      enable: false,
      showAllLabels: false,
      buttons: [
        {
          id: 'start',
          label: 'Demo',
          matIcon: 'home'
        },
        {
          id: 'components',
          label: 'Components',
          matIcon: 'widgets'
        },
        {
          id: 'documentation',
          label: 'Docs',
          matIcon: 'description'
        }
      ]
    },
    // DrawerConfig
    drawerConfig: {
      enable: true,
      open: true,
      fixed: true
    },
    // FooterConfig
    footerConfig: {
      enable: true,
      svgLogo: 'logo',
      links: [
        {
          label: 'About me',
          href: 'https://www.lukasfelbinger.at',
          externalTab: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lukfel/ng-scaffold',
          externalTab: true
        },
        {
          label: 'NPM',
          href: 'https://www.npmjs.com/package/@lukfel/ng-scaffold',
          externalTab: true
        },
      ],
      copyright: `© Lukas Felbinger 2026. All rights reserved. (v${packageJson.version})`
    },
    // ContentTitleCardConfig
    contentTitleCardConfig: {
      enable: true,
      showBackButton: true
    },
    // FloatingButtonConfig
    floatingButtonConfig: {
      enable: true,
      autoHide: true
    },
    // BottomBarConfig
    bottomBarConfig: {
      enable: false,
      closeButtonId: 'bottom-bar_close'
    }
  };

  // RightMenuButtons for mobile
  public mobileRightMenuButtons: MenuButton[] = [
    {
      id: 'menu',
      matIcon: 'more_vert'
    }
  ];

  // External links
  public externalMenuButtons: MenuButton[] = [
    {
      id: 'https://www.uglygotchi.at',
      label: 'Uglygotchi',
      svgIcon: 'ugly_logo',
      cssClass: 'lf-ugly-orange'
    },
    {
      id: 'https://www.what-a-waste.at',
      label: 'What A Waste',
      svgIcon: 'waw_logo',
      cssClass: 'lf-waw-cyan'
    },
    {
      id: 'https://www.create-a-tournament.com',
      label: 'Create A Tournament',
      svgIcon: 'cat_logo',
      cssClass: 'lf-cat-blue'
    },
    {
      id: 'https://www.wowen.at',
      label: 'Wowen',
      svgIcon: 'wowen_logo',
      cssClass: 'lf-wowen-black'
    },
  ];

  private currentTheme: string = '';


  constructor() {
    // Register custom svg for header logo
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logos/logo.svg'));
    this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    this.iconRegistry.addSvgIcon('github_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
    this.iconRegistry.addSvgIcon('npm_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/npm.svg'));
    this.iconRegistry.addSvgIcon('cat_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/cat.svg'));
    this.iconRegistry.addSvgIcon('waw_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/waw.svg'));
    this.iconRegistry.addSvgIcon('ugly_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/uglygotchi.svg'));
    this.iconRegistry.addSvgIcon('wowen_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/wowen.svg'));

    // Set config for scaffold
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;

    // Listen to theme changes
    this.themeService.currentTheme$.subscribe((currentTheme: string) => this.currentTheme = currentTheme);

    // Listen for breakpoint changes
    this.breakpointService.breakpoint$.subscribe((breakpointState: BreakpointState) => {
      if (breakpointState.breakpoints[Breakpoints.XSmall] || breakpointState.breakpoints[Breakpoints.Small]) {
        this.scaffoldService.updateScaffoldProperty('drawerConfig', { open: false });
      }
    });

    // Set Seo tags
    this.seoService.setMetaTags({
      metaPageTitle: 'Demo | Scaffold Library',
      metaPageDescription: 'This Angular library provides a basic UI scaffold and services for modern web and mobile apps',
      metaImagePath: 'scaffold/assets/img/meta.jpg'
    });
  }

  // Listen to header click events
  public headerButtonClickEvent(id: string): void {
    this.logger.log('You clicked the header button with id: ', id);

    if (id === 'drawer') {
      const open: boolean = this.scaffoldService?.scaffoldConfig?.drawerConfig?.open || false;
      this.scaffoldService.updateScaffoldProperty('drawerConfig', { open: !open });
      return;
    } else if (id === 'github') {
      window.open('https://github.com/lukfel/ng-scaffold', '_blank');
      return;
    } else if (id === 'npm') {
      window.open('https://www.npmjs.com/package/@lukfel/ng-scaffold', '_blank');
      return;
    } else if (id === 'start' || id === 'components' || id === 'documentation' || id === 'typography') {
      this.router.navigate([id]);
      return;
    }
  }

  // Listen to header input submit events
  public headerInputSubmitEvent(value: string): void {
    this.dialogService.openConfirmDialog({ title: 'You have entered:', message: value, closeLabel: 'Close', confirmLabel: 'Confirm' }).then((result: boolean) => {
      this.logger.log('close result: ', result);
    });
  }

  // Listen to header input change events
  public headerInputChangeEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to navbar click events
  public navbarButtonClickEvent(id: string): void {
    this.router.navigate([id]);
  }

  // Listen to floating button click events
  public floatingButtonClickEvent(id: string): void {
    this.logger.log('You clicked the floating button with id: ', id);
  }
}
