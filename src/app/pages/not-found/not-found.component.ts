import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceholderComponent, PlaceholderConfig, RouterService, ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PlaceholderComponent
  ]
})
export class NotFoundComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);
  private routerService = inject(RouterService);
  private router = inject(Router);


  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'block',
    title: '404',
    message: 'Page could not be found',
    button: {
      id: 'placeholder',
      label: 'STARTPAGE'
    }
  }

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig && this.routerService.currentRoute !== '/start') {
        scaffoldConfig.contentTitleCardConfig.label = '404 Not Found';
      }
    });
  }

  public navigateToStartpage(): void {
    this.router.navigate(['/']);
  }
}
