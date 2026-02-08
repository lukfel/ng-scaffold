import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { MarkdownComponent } from 'ngx-markdown';
import { take } from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MarkdownComponent
  ]
})
export class DocumentationComponent implements OnInit {

  private scaffoldService = inject(ScaffoldService);


  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        this.scaffoldService.updateScaffoldProperty('contentTitleCardConfig', { label: 'Documentation' });
      }
    });
  }
}
