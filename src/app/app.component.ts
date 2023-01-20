import { Component } from '@angular/core';
import { FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '@lf/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public headerConfig: HeaderConfig = {
    show: true,
    title: 'Scaffold'
  }

  public sidenavConfig: SidenavConfig = {
    show: true
  }

  public footerConfig: FooterConfig = {
    show: true,
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    show: true
  }

}
