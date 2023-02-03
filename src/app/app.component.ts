import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DialogService, Logger, ScaffoldConfig, ScaffoldService, SnackbarService } from '@lukfel/scaffold';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public scaffoldConfig: ScaffoldConfig = {
    // ScaffoldConfig
    loading: false,
    // HeaderConfig
    headerConfig: {
      enable: true,
      svgLogo: 'lf_logo',
      title: 'Scaffold',
      subtitle: 'by Lukas Felbinger',
      loading: false,
      showRouteLoading: true,
      leftMenuButton: {
        id: 'menu',
        matIcon: 'menu',
        outlineIcon: true,
        tooltip: 'Menu'
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
    // SidenavConfig
    sidenavConfig: {
      enable: true,
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
      logo: 'lf_logo',
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
    // ToTopButtonConfig
    toTopButtonConfig: {
      enable: true,
      tooltip: 'To top'
    }
  }

  constructor(private router: Router,
    private logger: Logger,
    private snackbarService: SnackbarService,
    private dialogService: DialogService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private scaffoldService: ScaffoldService) {
    // Register custom svg for header logo
    this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    this.iconRegistry.addSvgIcon('github_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));

    // Set config for scaffold
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }

  // Listen to header click events
  public headerClickEvent(id: string): void {
    if (id === 'menu') {
      if(this.scaffoldConfig.drawerConfig) {
        this.scaffoldConfig.drawerConfig.open = !this.scaffoldConfig.drawerConfig.open;
      }
    } else if (id === 'github') {
      window.open('https://github.com/lukfel/scaffold', '_blank');
    } else {
      this.snackbarService.openDefaultSnackbarWithAction(`You clicked the header button  '${id}'`, 'Close').then(() => {
        this.dialogService.openConfirmDialog(`You closed the snackbar of the header button '${id}'`).then((result: boolean) => {
          this.logger.log(result);
        });
      }).catch((error: string) => {
        this.logger.log(error);
      });
    }
  }

  // Listen to header input submit events
  public headerSubmitEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to header input change events
  public headerInputEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to sidenav click events
  public sidenavClickEvent(id: string): void {
    this.router.navigate([id]);
  }

}
