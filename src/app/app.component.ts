import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContainerConfig, DrawerConfig, FooterConfig, HeaderConfig, Logger, SidenavConfig, SnackbarService, ToTopButtonConfig } from '@lf/components';
import { take } from 'rxjs';

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
    subTitle: 'by Lukas Felbinger',
    loading: false,
    showRouteLoading: true,
    leftMenuButton: {
      id: 'menu',
      matIcon: 'menu',
      outlineIcon: true
    },
    rightMenuButton: {
      id: 'settings',
      matIcon: 'settings',
      outlineIcon: true
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
    show: true
  }

  public footerConfig: FooterConfig = {
    show: true,
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    show: true
  }

  constructor(private router: Router,
              private logger: Logger,
              private snackbarService: SnackbarService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
                // Register custom svg for header logo
                this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
              }

    // Detects the click event in the header and navigates according to the id
    public headerClickEvent(id: string): void {
      if(id === 'menu') {
        this.snackbarService.openDefaultSnackbar(`You have clicked menu button '${id}'`);
      } else {
        this.snackbarService.openDefaultSnackbarWithAction(`You have clicked menu button '${id}'`, 'Close').onAction().pipe(take(1)).subscribe(() => {
          this.logger.log(`You have closed the snackbar of menu button '${id}'`);
        });
      }
  }

  // Detects the click event in the sidenav and navigates according to the id
  public sidenavClickEvent(id: string): void {
      this.router.navigate([id]);
  }

}
