import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidenavConfig } from '../../models';

@Component({
  selector: 'lf-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() public sidenavConfig: SidenavConfig = {};
  @Input() public isMobile: boolean = false;
  @Input() public currentRoute: string;

  @Output() public sidenavClickEvent = new EventEmitter<string>();

  public buttonClicked(id: string): void {
    if(!id) {
      return;
    }

    this.sidenavClickEvent.emit(id);
  }

  public isActive(id: string): boolean {
    if(!id || !this.currentRoute) {
      return false;
    }

    return this.currentRoute.includes(id);
  }

}
