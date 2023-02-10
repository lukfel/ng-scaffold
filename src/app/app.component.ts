import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BreakpointService, DialogService, Logger, MenuButton, ScaffoldConfig, ScaffoldService, SnackbarService } from '@lukfel/scaffold';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    loading: false,
    scrollPositionRestoration: true,
    // HeaderConfig
    headerConfig: {
      enable: true,
      svgLogo: 'lf_logo',
      title: 'Scaffold',
      subtitle: 'by Lukas Felbinger',
      loading: false,
      showRouteLoading: true,
      leftMenuButton: {
        id: 'drawer',
        matIcon: 'menu',
        outlineIcon: true
      },
      rightMenuButtons: [
        {
          id: 'item1',
          label: 'Item 1'
        },
        {
          id: 'item2',
          label: 'Item 2'
        },
        {
          id: 'item3',
          label: 'Item 3'
        },
        {
          id: 'settings',
          matIcon: 'settings',
          tooltip: 'Settings',
          outlineIcon: true
        },
        {
          id: 'github',
          svgIcon: 'github_logo',
          outlineIcon: true,
          tooltip: 'GitHub'
        }
      ],
      inputConfig: {
        enable: true,
        label: 'Search',
        matIcon: 'search'
      }
    },
    // NavbarConfig
    navbarConfig: {
      enable: true,
      showAllLabels: true,
      menuButtons: [
        {
          id: 'start',
          matIcon: 'home',
          label: 'Home',
          outlineIcon: true
        },
        {
          id: 'documentation',
          matIcon: 'description',
          label: 'Docu',
          outlineIcon: true
        },
        {
          id: '404',
          matIcon: 'block',
          label: '404',
          outlineIcon: true
        }
      ]
    },
    // DrawerConfig
    drawerConfig: {
      enable: true,
      open: false,
      fixed: true
    },
    // FooterConfig
    footerConfig: {
      enable: true,
      svgLogo: 'lf_logo',
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
      copyright: '© Lukas Felbinger 2023. All rights reserved.'
    },
    // ContentTitleCardConfig
    contentTitleCardConfig: {
      enable: true,
      label: 'Example Title',
      showBackButton: true
    },
    // ToTopButtonConfig
    toTopButtonConfig: {
      enable: true,
      tooltip: 'To top'
    }
  }

  // RightMenuButtons for mobile
  public mobileRightMenuButtons: MenuButton[] = [
    {
      id: 'menu',
      matIcon: 'more_vert',
      menuButtons: [
        {
          id: 'item1',
          label: 'Item 1'
        },
        {
          id: 'item2',
          label: 'Item 2'
        }
      ]
    }
  ]

  constructor(private router: Router,
    private logger: Logger,
    private snackbarService: SnackbarService,
    private dialogService: DialogService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private scaffoldService: ScaffoldService,
    private breakpointService: BreakpointService) {
    // Register custom svg for header logo
    this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    this.iconRegistry.addSvgIcon('github_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));

    // Set config for scaffold
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;

    // Store the rightMenuButtons from the scaffoldConfig for desktop
    const defaultRightMenuButtons: MenuButton[] = this.scaffoldConfig.headerConfig?.rightMenuButtons || [];

    // Update the rightMenuButtons when on mobile breakpoint
    this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      if (this.scaffoldConfig?.headerConfig) {
        // Check which breakpoint is active
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.scaffoldConfig.headerConfig.rightMenuButtons = this.mobileRightMenuButtons;
        } else {
          this.scaffoldConfig.headerConfig.rightMenuButtons = defaultRightMenuButtons;
        }
      }
    });
  }

  // Listen to header click events
  public headerClickEvent(id: string): void {
    if (id === 'drawer') {
      if (this.scaffoldConfig.drawerConfig) {
        this.scaffoldConfig.drawerConfig.open = !this.scaffoldConfig.drawerConfig.open;
      }
    } else if (id === 'github') {
      window.open('https://github.com/lukfel/scaffold', '_blank');
    } else {
      this.snackbarService.openSnackbar(`You clicked the header button  '${id}'`);
    }
  }

  // Listen to header input submit events
  public headerSubmitEvent(value: string): void {
    this.dialogService.openConfirmDialog('You have entered:', value).then(result => {
      if (result) {
        this.logger.log(result);
      }
    })
  }

  // Listen to header input change events
  public headerInputEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to navbar click events
  public navbarClickEvent(id: string): void {
    this.router.navigate([id]);
  }

}
