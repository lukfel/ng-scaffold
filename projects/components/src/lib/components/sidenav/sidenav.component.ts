import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidenavConfig } from '../../models';

@Component({
  selector: 'lf-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() public sidenavConfig: SidenavConfig = {};

  @Output() public sidenavClickEvent = new EventEmitter<string>();

  public buttonClicked(id?: string): void {
    this.sidenavClickEvent.emit(id);
  }

}
