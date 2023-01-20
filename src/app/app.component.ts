import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '@lf/components';

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
    title: 'Scaffold',
    loading: false
  }

  public sidenavConfig: SidenavConfig = {
    show: true,
    menuButtons: [
      {
        matIcon: 'home',
        label: 'Startseite',
        id: 'start'
      },
      {
        matIcon: 'mail',
        label: 'Kontakt',
        id: 'contact'
      }
    ]
  }

  public footerConfig: FooterConfig = {
    show: true,
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    show: true
  }

  constructor(private router: Router) {}

  // Detects the click event in the sidenav and navigates according to the id
  public sidenavClickEvent(id: string): void {
      this.router.navigate([id]);
  }

}
