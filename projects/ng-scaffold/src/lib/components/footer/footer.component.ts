import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule
  ]
})
export class FooterComponent {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public footerConfig: FooterConfig | null = null;

}
