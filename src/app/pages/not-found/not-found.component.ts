import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  PlaceholderComponent,
  PlaceholderConfig,
  RouterService,
  ScaffoldConfig,
  ScaffoldService,
} from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PlaceholderComponent],
})
export class NotFoundComponent {
  private scaffoldService = inject(ScaffoldService);
  private routerService = inject(RouterService);
  private router = inject(Router);

  public placeholderConfig = signal<PlaceholderConfig>({
    matIcon: 'block',
    title: '404',
    message: 'Page could not be found',
    button: {
      id: 'placeholder',
      label: 'STARTPAGE',
    },
  });

  constructor() {
    this.scaffoldService.scaffoldConfig$
      .pipe(take(1), takeUntilDestroyed())
      .subscribe((scaffoldConfig: ScaffoldConfig) => {
        if (scaffoldConfig.contentTitleCardConfig && this.routerService.currentRoute !== '/start') {
          this.scaffoldService.updateScaffoldProperty('contentTitleCardConfig', {
            label: '404 Not Found',
          });
        }
      });
  }

  public navigateToStartpage(): void {
    this.router.navigate(['/']);
  }
}
