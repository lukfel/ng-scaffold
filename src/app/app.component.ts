import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContainerConfig, DialogService, DrawerConfig, FooterConfig, HeaderConfig, Logger, SidenavConfig, SnackbarService, ToTopButtonConfig } from '@lf/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public containerConfig: ContainerConfig = {
    loading: false
  }

  public headerConfig: HeaderConfig = {
    show: true,
    logo: 'lf_logo',
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
        id: 'settings',
        matIcon: 'settings',
        outlineIcon: true,
        tooltip: 'Settings'
      },
      {
        id: 'user',
        matIcon: 'account_circle',
        outlineIcon: true,
        tooltip: 'User'
      }
    ],
    inputConfig: {
      show: false,
      label: 'Search',
      matIcon: 'search'
    }
  }

  public sidenavConfig: SidenavConfig = {
    show: true,
    menuButtons: [
      {
        id: 'start',
        matIcon: 'home',
        label: 'Home',
        outlineIcon: true
      },
      {
        id: 'contact',
        matIcon: 'mail',
        label: 'Contact',
        outlineIcon: true
      },
      {
        id: '404',
        matIcon: 'block',
        label: '404',
        outlineIcon: true
      }
    ]
  }

  public drawerConfig: DrawerConfig = {
    show: true,
    open: false,
    fixed: true
  }

  public footerConfig: FooterConfig = {
    show: true,
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    show: true,
    tooltip: 'To top'
  }

  constructor(private router: Router,
              private logger: Logger,
              private snackbarService: SnackbarService,
              private dialogService: DialogService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
                // Register custom svg for header logo
                this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
              }

    // Detects the click event in the header and navigates according to the id
    public headerClickEvent(id: string): void {
      if(id === 'menu') {
        this.drawerConfig.open = !this.drawerConfig.open;
        this.snackbarService.openDefaultSnackbar(`You clicked the header button '${id}'`);
      } else {
        this.snackbarService.openDefaultSnackbarWithAction(`You clicked the header button  '${id}'`, 'Close').then(() => {
          this.dialogService.openConfirmDialog(`You closed the snackbar of the header button '${id}'`).then(result => {
            this.logger.log(result);
          });
        }).catch(error => {
          this.logger.log(error);
        });
      }
  }

  // Detects changes in the header input field
  public headerInputEvent(value: string): void {
    this.logger.log(value);
  }

  // Detects the click event in the sidenav and navigates according to the id
  public sidenavClickEvent(id: string): void {
      this.router.navigate([id]);
  }

}
