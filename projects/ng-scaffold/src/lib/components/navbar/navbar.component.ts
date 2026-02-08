import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('responsiveSlide', [
      // States for desktop and mobile
      state('desktop', style({ transform: 'translateX(0)' })),
      state('mobile', style({ transform: 'translateY(0)' })),

      // Desktop enter (slide in from left)
      transition('void => desktop', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms linear')
      ]),
      // Desktop leave (slide back to left)
      transition('desktop => void', [
        animate('200ms linear', style({ transform: 'translateX(-100%)' }))
      ]),

      // Mobile enter (slide in from bottom)
      transition('void => mobile', [
        style({ transform: 'translateY(100%)' }),
        animate('200ms linear')
      ]),
      // Mobile leave (slide back to bottom)
      transition('mobile => void', [
        animate('200ms linear', style({ transform: 'translateY(100%)' }))
      ]),
    ])
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class NavbarComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly navbarConfig = input<NavbarConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly currentRoute = input<string>();

  public readonly navbarButtonClickEvent = output<string>();

  public isActive = computed(() => {
    const currentRoute = this.currentRoute();
    const route: string = currentRoute?.substring(currentRoute.indexOf('/') + 1) || '';
    return (id: string): boolean => !!route && !!id && route === id;
  });


  public buttonClicked(id: string): void {
    if (!id) {
      return;
    }

    this.navbarButtonClickEvent.emit(id);
  }

}
