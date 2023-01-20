import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { ContainerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '../../models';

@Component({
  selector: 'lf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent {

  @Input() public containerConfig: ContainerConfig = {};
  @Input() public headerConfig: HeaderConfig = {};
  @Input() public sidenavConfig: SidenavConfig = {};
  @Input() public footerConfig: FooterConfig = {};
  @Input() public toTopButtonConfig: ToTopButtonConfig = {};

  @Output() public sidenavClickEvent = new EventEmitter<string>();

  public sidenavButtonClicked(id: string): void {
    this.sidenavClickEvent.emit(id);
  }

}
