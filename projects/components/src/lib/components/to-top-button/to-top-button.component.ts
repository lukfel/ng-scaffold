import { Component, Input } from '@angular/core';
import { ToTopButtonConfig } from '../../models';

@Component({
  selector: 'lf-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent {

  @Input() public toTopButtonConfig: ToTopButtonConfig = {};

}
