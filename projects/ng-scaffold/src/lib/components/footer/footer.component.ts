import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FooterComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly footerConfig = input<FooterConfig | null>(null);

}
