import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../../config/config.token';
import { PlaceholderConfig, ScaffoldLibraryConfig } from '../../../models';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lf-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class PlaceholderComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });


  @Input() public placeholderConfig: PlaceholderConfig;

  @Output() public buttonClickEvent = new EventEmitter<void>();
}
