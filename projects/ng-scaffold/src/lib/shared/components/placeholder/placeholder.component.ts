import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CONFIG } from '../../../config/config.token';
import { PlaceholderConfig, ScaffoldLibraryConfig } from '../../../models';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'lf-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class PlaceholderComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });


  @Input() public placeholderConfig: PlaceholderConfig;

  @Output() public buttonClickEvent = new EventEmitter<void>();
}
