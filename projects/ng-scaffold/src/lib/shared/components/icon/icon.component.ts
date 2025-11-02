import { Component, inject, Input } from '@angular/core';
import { CONFIG } from '../../../config/config.token';
import { ScaffoldLibraryConfig } from '../../../models';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'lf-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class IconComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });


  @Input() public matIcon: string | undefined;
  @Input() public svgIcon: string | undefined;
  @Input() public verticalAlign: 'top' | 'middle' | 'bottom' | null = null;
}
