import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderConfig } from '../../models';

@Component({
    selector: 'lf-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  @Input() public headerConfig: HeaderConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public routeLoading: boolean = false;

  @Output() public headerButtonClickEvent = new EventEmitter<string>();
  @Output() public headerInputSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputChangeEvent = new EventEmitter<string>();

  ngOnInit(): void {
    // Avoid initializing the header with an open input field on mobile
    if (this.isMobile && this.headerConfig?.inputConfig?.enable) {
      this.headerConfig.inputConfig.enable = false;
    }
  }

  public buttonClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.headerButtonClickEvent.emit(id);
  }

  public inputSubmitted(value: string): void {
    this.headerInputSubmitEvent.emit(value);
  }

  public inputChanged(value: string): void {
    this.headerInputChangeEvent.emit(value);
  }

}
