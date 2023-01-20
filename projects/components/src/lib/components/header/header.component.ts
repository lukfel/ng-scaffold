import { Component, Input } from '@angular/core';
import { HeaderConfig } from '../../models/header-config.model';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() public headerConfig: HeaderConfig = {};

}
