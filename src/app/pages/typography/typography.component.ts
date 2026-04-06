import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class TypographyComponent {
  private scaffoldService = inject(ScaffoldService);

  constructor() {
    this.scaffoldService.scaffoldConfig$
      .pipe(take(1), takeUntilDestroyed())
      .subscribe((scaffoldConfig: ScaffoldConfig) => {
        if (scaffoldConfig.contentTitleCardConfig) {
          this.scaffoldService.updateScaffoldProperty('contentTitleCardConfig', {
            label: 'Typography',
          });
        }
      });
  }
}
