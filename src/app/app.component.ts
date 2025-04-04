import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BreakpointService, DialogService, Logger, MenuButton, ScaffoldConfig, ScaffoldService, SeoService, SnackbarService } from '@lukfel/scaffold';
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {

  public version = packageJson.version;

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    loading: false,
    scrollPositionRestoration: true,
    // HeaderConfig
    headerConfig: {
      enable: true,
      svgLogo: 'logo',
      title: 'Scaffold',
      subtitle: `by Lukas Felbinger (v${packageJson.version})`,
      titleRouterLink: 'start',
      loading: false,
      showRouteLoading: true,
      leftMenuButton: {
        id: 'drawer',
        matIcon: 'menu',
        outlineIcon: true
      },
      rightMenuButtons: [
        {
          id: 'start',
          label: 'Home'
        },
        {
          id: 'documentation',
          label: 'Docs'
        },
        {
          id: 'typography',
          label: 'Typography'
        },
        {
          id: 'github',
          svgIcon: 'github_logo',
          tooltip: 'GitHub',
          class: 'gray-icon'
        },
        {
          id: 'npm',
          svgIcon: 'npm_logo',
          tooltip: 'NPM',
          class: 'gray-icon'
        }
      ],
      inputConfig: {
        enable: true,
        label: 'Search',
        matIconSubmit: 'search',
        autoFocus: false
      }
    },
    // NavbarConfig
    navbarConfig: {
      enable: false,
      showAllLabels: false,
      menuButtons: [
        {
          id: 'start',
          label: 'Home',
          matIcon: 'home',
          outlineIcon: true
        },
        {
          id: 'documentation',
          label: 'Docs',
          matIcon: 'description',
          outlineIcon: true
        },
        {
          id: 'typography',
          label: 'Typography',
          matIcon: 'text_fields',
          outlineIcon: true
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
          label: 'About',
          href: 'https://www.lukasfelbinger.at',
          externalTab: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lukfel/scaffold',
          externalTab: true
        },
      ],
      copyright: '© Lukas Felbinger 2025. All rights reserved.'
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
      enable: false
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
      id: 'https://www.create-a-tournament.com',
      label: 'Create A Tournament',
      svgIcon: 'cat_logo',
      class: 'lf-cat-blue'
    },
    {
      id: 'https://www.what-a-waste.at',
      label: 'What A Waste',
      svgIcon: 'waw_logo',
      class: 'lf-waw-cyan'
    },
    // {
    //   id: 'https://www.uglygotchi.at',
    //   label: 'Uglygotchi',
    //   svgIcon: 'ugly_logo',
    //   class: 'lf-ugly-blue'
    // }
  ];

  constructor(private router: Router,
    private logger: Logger,
    private snackbarService: SnackbarService,
    private dialogService: DialogService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private scaffoldService: ScaffoldService,
    private breakpointService: BreakpointService,
    private seoService: SeoService) {
    // Register custom svg for header logo
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logos/logo.svg'));
    this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    this.iconRegistry.addSvgIcon('github_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
    this.iconRegistry.addSvgIcon('npm_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/npm.svg'));
    this.iconRegistry.addSvgIcon('cat_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/cat.svg'));
    this.iconRegistry.addSvgIcon('waw_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/waw.svg'));
    this.iconRegistry.addSvgIcon('ugly_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/uglygotchi.svg'));

    // Set config for scaffold
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;

    // Store the rightMenuButtons from the scaffoldConfig for desktop
    const defaultRightMenuButtons: MenuButton[] = this.scaffoldConfig.headerConfig?.rightMenuButtons || [];

    // Update the rightMenuButtons when on mobile breakpoint
    this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      if (this.scaffoldConfig?.headerConfig) {
        // Check which breakpoint is active
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.mobileRightMenuButtons[0].menuButtons = defaultRightMenuButtons;
          this.scaffoldConfig.headerConfig.rightMenuButtons = this.mobileRightMenuButtons;
        } else {
          this.scaffoldConfig.headerConfig.rightMenuButtons = defaultRightMenuButtons;
        }
      }

      // Initially disable navbar on desktop
      if (this.scaffoldConfig?.navbarConfig?.enable === false) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.scaffoldConfig.navbarConfig.enable = true;
        }
      }
    });

    // Set Seo tags
    this.seoService.setMetaTags({
      metaPageTitle: 'Demo | Scaffold Library',
      metaPageDescription: 'This Angular library provides a basic UI scaffold and services for mordern web and mobile apps',
      metaImagePath: 'scaffold/assets/img/meta.jpg'
    });
  }

  // Listen to header click events
  public headerButtonClickEvent(id: string): void {
    this.snackbarService.openSnackbar(`You clicked the header button with id:   ${id}`);

    if (id === 'drawer') {
      if (this.scaffoldConfig.drawerConfig) {
        this.scaffoldConfig.drawerConfig.open = !this.scaffoldConfig.drawerConfig.open;
      }
      return;
    } else if (id === 'github') {
      window.open('https://github.com/lukfel/scaffold', '_blank');
      return;
    } else if (id === 'npm') {
      window.open('https://www.npmjs.com/package/@lukfel/scaffold', '_blank');
      return;
    } else if (id === 'start' || id === 'documentation' || id === 'typography') {
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
    this.snackbarService.openSnackbar(`You clicked the floating button with id:   ${id}`);
  }
}
