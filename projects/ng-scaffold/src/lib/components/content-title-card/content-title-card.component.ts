import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public contentTitleCardConfig: ContentTitleCardConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public routeHistory: string[] = [];

  @Output() public backButtonClickEvent = new EventEmitter<void>();


  public backButtonClicked(): void {
    this.backButtonClickEvent.emit();
  }

}
