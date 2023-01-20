import { Component, Input } from '@angular/core';
import { SidenavConfig } from '../../models';

@Component({
  selector: 'lf-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() public sidenavConfig: SidenavConfig = {};

}
