import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    NgClass
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
