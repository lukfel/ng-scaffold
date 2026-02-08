import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceholderConfig, ScaffoldLibraryConfig } from '../../../models';
import { CONFIG } from '../../../scaffold.config';

@Component({
  selector: 'lf-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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


  public readonly placeholderConfig = input<PlaceholderConfig>();

  public readonly buttonClickEvent = output<void>();
}
