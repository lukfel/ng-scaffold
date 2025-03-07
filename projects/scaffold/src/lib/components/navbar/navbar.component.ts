import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarConfig } from '../../models';

@Component({
    selector: 'lf-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

  @Input() public navbarConfig: NavbarConfig = {};
  @Input() public isMobile: boolean = false;
  @Input() public currentRoute: string;

  @Output() public navbarButtonClickEvent = new EventEmitter<string>();

  public buttonClicked(id: string): void {
    if(!id) {
      return;
    }

    this.navbarButtonClickEvent.emit(id);
  }

  public isActive(id: string): boolean {
    if(!id || !this.currentRoute) {
      return false;
    }

    const route: string = this.currentRoute.substring(this.currentRoute.indexOf('/') + 1);
    return route === id;
  }

}
