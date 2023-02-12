import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DrawerConfig, FooterConfig, HeaderConfig, ScaffoldConfig, ScaffoldService, NavbarConfig, ToTopButtonConfig, ContentTitleCardConfig } from '@lukfel/scaffold';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit, OnDestroy {

  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public navbarConfig: NavbarConfig = {};
  public drawerConfig: DrawerConfig = {};
  public footerConfig: FooterConfig = {};
  public contentTitleCardConfig: ContentTitleCardConfig = {};
  public toTopButtonConfig: ToTopButtonConfig = {};

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = scaffoldConfig.headerConfig || {};
      this.navbarConfig = scaffoldConfig.navbarConfig || {};
      this.drawerConfig = scaffoldConfig.drawerConfig || {};
      this.footerConfig = scaffoldConfig.footerConfig || {};
      this.contentTitleCardConfig = scaffoldConfig.contentTitleCardConfig || {};
      this.contentTitleCardConfig.label = 'Home';
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

  public headerImgLogoChange(event: string): void {
    if (event) {
      this.headerConfig.svgLogo = '';
    } else {
      this.headerConfig.svgLogo = 'lf_logo'
    }
  }

  public footerImgLogoChange(event: string): void {
    if (event) {
      this.footerConfig.svgLogo = '';
    } else {
      this.footerConfig.svgLogo = 'lf_logo'
    }
  }

  public setTheme(theme: string): void {
    this.document.body.classList.forEach(value => {
      this.document.body.classList.remove(value);
    })
    this.document.body.classList.add(theme);
  }

}
