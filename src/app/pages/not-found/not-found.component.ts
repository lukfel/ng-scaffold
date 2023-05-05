import { Component, OnInit } from '@angular/core';
import { ScaffoldConfig, ScaffoldService, PlaceholderConfig } from '@lukfel/scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'block',
    heading: '404',
    message: 'This page could not be found.'
  }

  constructor(private scaffoldService: ScaffoldService) {}

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig.contentTitleCardConfig?.label) {
        scaffoldConfig.contentTitleCardConfig.label = '404 Not Found';
      }
    });
  }

}
