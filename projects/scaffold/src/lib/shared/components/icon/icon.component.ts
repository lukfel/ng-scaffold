import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'lf-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class IconComponent {

  @Input() public matIcon: string;
  @Input() public svgIcon: string;
  @Input() public outlineIcon: boolean = false;
  @Input() public alignMiddle: boolean = false;
}
