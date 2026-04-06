import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { MarkdownComponent } from 'ngx-markdown';
import { take } from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MarkdownComponent],
})
export class DocumentationComponent {
  private scaffoldService = inject(ScaffoldService);

  constructor() {
    this.scaffoldService.scaffoldConfig$
      .pipe(take(1), takeUntilDestroyed())
      .subscribe((scaffoldConfig: ScaffoldConfig) => {
        if (scaffoldConfig.contentTitleCardConfig) {
          this.scaffoldService.updateScaffoldProperty('contentTitleCardConfig', {
            label: 'Documentation',
          });
        }
      });
  }
}
