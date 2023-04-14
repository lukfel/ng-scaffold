import { Component, Input } from '@angular/core';

@Component({
  selector: 'lf-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() public matIcon: string;
  @Input() public svgIcon: string;
  @Input() public outlineIcon: boolean = false;
}
