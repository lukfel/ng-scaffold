import { Component, OnInit } from '@angular/core';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  constructor(private scaffoldService: ScaffoldService) {}

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Documentation';
      }
    });
  }

}
