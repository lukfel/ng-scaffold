import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { MarkdownComponent } from 'ngx-markdown';
import { take } from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MarkdownComponent
  ]
})
export class DocumentationComponent implements OnInit {

  private scaffoldService = inject(ScaffoldService);
  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Documentation';
      }
    });
  }
}
