import { Injectable } from '@angular/core';
import { ContainerConfig, DrawerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '@lf/scaffold';


@Injectable({
  providedIn: 'root'
})
export class ScaffoldService {

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
        id: 'home',
        label: 'Home'
      },
      {
        id: 'contact',
        label: 'Contact'
      },
      {
        id: 'settings',
        matIcon: 'settings',
        outlineIcon: true,
        tooltip: 'Settings'
      }
    ],
    inputConfig: {
      show: true,
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
    logo: 'lf_logo',
    links: [
      {
        label: 'Home',
        routerLink: 'start'
      },
      {
        label: 'About',
        href: 'https://www.lukasfelbinger.at',
        externalTab: true
      },
      {
        label: 'Contact',
        routerLink: 'contact'
      }
    ],
    copyright: '© Lukas Felbinger 2023. All rights reserved.'
  }

  public toTopButtonConfig: ToTopButtonConfig = {
    show: true,
    tooltip: 'To top'
  }
}
