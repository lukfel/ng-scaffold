import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrawerConfig, FooterConfig, HeaderConfig, ScaffoldConfig, ScaffoldService, SidenavConfig, ToTopButtonConfig } from '@lukfel/scaffold';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit, OnDestroy {

  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public sidenavConfig: SidenavConfig = {};
  public drawerConfig: DrawerConfig = {};
  public footerConfig: FooterConfig = {};
  public toTopButtonConfig: ToTopButtonConfig = {};

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = scaffoldConfig.headerConfig || {};
      this.sidenavConfig = scaffoldConfig.sidenavConfig || {};
      this.drawerConfig = scaffoldConfig.drawerConfig || {};
      this.footerConfig = scaffoldConfig.footerConfig || {};
      this.toTopButtonConfig = scaffoldConfig.toTopButtonConfig || {};
    }));
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public showContainerLoading(): void {
    this.scaffoldService.scaffoldConfig.loading = true;

    setTimeout(() => {
      this.scaffoldService.scaffoldConfig.loading = false;
    }, 3000);
  }

  public imgLogoChange(event: string): void {
    if (event) {
      this.headerConfig.svgLogo = '';
    } else {
      this.headerConfig.svgLogo = 'lf_logo'
    }
  }

}
