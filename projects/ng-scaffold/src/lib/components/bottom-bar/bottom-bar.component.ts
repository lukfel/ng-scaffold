import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BottomBarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgClass
]
})
export class BottomBarComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly bottomBarConfig = input<BottomBarConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly navbarEnabled = input<boolean>(false);

  public readonly bottomBarCloseClickEvent = output<string>();
  public readonly bottomBarButtonClickEvent = output<string>();


  public buttonClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.bottomBarButtonClickEvent.emit(id);
  }

  public closeClicked(closeButtonId: string): void {
    this.bottomBarCloseClickEvent.emit(closeButtonId);
  }

}
