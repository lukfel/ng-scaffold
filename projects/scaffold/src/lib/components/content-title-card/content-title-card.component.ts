import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentTitleCardConfig } from '../../models';

@Component({
    selector: 'lf-content-title-card',
    templateUrl: './content-title-card.component.html',
    styleUrls: ['./content-title-card.component.scss'],
    standalone: false
})
export class ContentTitleCardComponent {

  @Input() public contentTitleCardConfig: ContentTitleCardConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public routeHistory: string[] = [];

  @Output() public backButtonClickEvent = new EventEmitter<void>();

  public inputValue: string = '';

  public backButtonClicked(): void {
    this.backButtonClickEvent.emit();
  }

}
