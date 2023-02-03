import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderConfig } from '../../models';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public headerConfig: HeaderConfig = {};
  @Input() public isMobile: boolean = false;
  @Input() public scrollElement: HTMLElement;
  @Input() public routeLoading: boolean = false;

  @Output() public headerClickEvent = new EventEmitter<string>();
  @Output() public headerSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputEvent = new EventEmitter<string>();

  public inputValue: string = '';

  ngOnInit(): void {
    // Avoid initializing the header with an open input field on mobile
    if(this.isMobile && this.headerConfig?.inputConfig?.enable) {
      this.headerConfig.inputConfig.enable = false;
    }
  }

  public buttonClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.headerClickEvent.emit(id);
  }

  public inputSubmitted(value: string): void {
    this.headerSubmitEvent.emit(value);
  }

  public inputChanged(value: string): void {
    this.headerInputEvent.emit(value);
  }

}
