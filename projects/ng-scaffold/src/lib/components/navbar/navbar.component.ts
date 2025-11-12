import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideRightLift', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('200ms linear', style({ transform: 'translateX(0)' }))]),
      transition(':leave', [animate('200ms linear', style({ transform: 'translateX(-100%)' }))])
    ])
  ],
  standalone: false
})
export class NavbarComponent {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public navbarConfig: NavbarConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public currentRoute: string;

  @Output() public navbarButtonClickEvent = new EventEmitter<string>();


  public buttonClicked(id: string): void {
    if (!id) {
      return;
    }

    this.navbarButtonClickEvent.emit(id);
  }

  public isActive(id: string): boolean {
    if (!id || !this.currentRoute) {
      return false;
    }

    const route: string = this.currentRoute.substring(this.currentRoute.indexOf('/') + 1);
    return route === id;
  }

}
