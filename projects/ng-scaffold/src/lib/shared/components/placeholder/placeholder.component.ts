import { Component, Input } from '@angular/core';
import { PlaceholderConfig } from '../../../models';
import { SharedModule } from '../../shared.module';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'lf-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  standalone: true,
  imports: [SharedModule, IconComponent]
})
export class PlaceholderComponent {

  @Input() public placeholderConfig: PlaceholderConfig;
}
