import { Component, OnInit, inject } from '@angular/core';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    standalone: false
})
export class TypographyComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);


  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Typography';
      }
    });
  }

}
