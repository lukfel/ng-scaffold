import { Component, OnInit, inject } from '@angular/core';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/scaffold';
import { take } from 'rxjs';

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss'],
    standalone: false
})
export class DocumentationComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);


  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Documentation';
      }
    });
  }

}
