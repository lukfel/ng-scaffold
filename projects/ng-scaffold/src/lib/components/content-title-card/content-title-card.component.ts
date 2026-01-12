import { CommonModule } from '@angular/common';
import { Component, output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContentTitleCardConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-content-title-card',
  templateUrl: './content-title-card.component.html',
  styleUrls: ['./content-title-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ContentTitleCardComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly contentTitleCardConfig = input<ContentTitleCardConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly routeHistory = input<string[]>([]);

  public readonly backButtonClickEvent = output<void>();


  public backButtonClicked(): void {
    this.backButtonClickEvent.emit();
  }

}
