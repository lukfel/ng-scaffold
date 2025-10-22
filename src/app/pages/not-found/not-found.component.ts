import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceholderConfig, ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: false
})
export class NotFoundComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);
  private router = inject(Router);


  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'block',
    outlineIcon: true,
    heading: '404',
    message: 'This page could not be found.',
    buttonLabel: 'STARTPAGE'
  }

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = '404 Not Found';
      }
    });
  }

  public navigateToStartpage(): void {
    this.router.navigate(['/']);
  }
}
