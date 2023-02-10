import { Component, OnInit } from '@angular/core';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  constructor(private scaffoldService: ScaffoldService) {}

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig.contentTitleCardConfig?.label) {
        scaffoldConfig.contentTitleCardConfig.label = 'Typography';
      }
    });
  }

}
