import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BottomBarConfig, ContentTitleCardConfig, DialogService, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, Logger, MenuButton, NavbarConfig, ScaffoldConfig, ScaffoldService, ThemeService } from '@lukfel/scaffold';
import { Subscription } from 'rxjs';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss'],
  standalone: false
})
export class StartpageComponent implements OnInit, OnDestroy {
  private scaffoldService = inject(ScaffoldService);
  private themeService = inject(ThemeService);
  private dialogService = inject(DialogService);
  private logger = inject(Logger);
  private cd = inject(ChangeDetectorRef);


  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public navbarConfig: NavbarConfig = {};
  public drawerConfig: DrawerConfig = {};
  public footerConfig: FooterConfig = {};
  public contentTitleCardConfig: ContentTitleCardConfig = {};
  public floatingButtonConfig: FloatingButtonConfig = {};
  public bottomBarConfig: BottomBarConfig = {};

  public bottomBarDemoList = [
    {
      checked: false,
      label: 'Demo item 1'
    },
    {
      checked: false,
      label: 'Demo item 2'
    },
    {
      checked: false,
      label: 'Demo item 3'
    }
  ];

  public inputValue: string = '';

  private _subscription: Subscription = new Subscription;

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = this.scaffoldConfig.headerConfig!;
      this.navbarConfig = this.scaffoldConfig.navbarConfig!;
      this.drawerConfig = this.scaffoldConfig.drawerConfig!;
      this.footerConfig = this.scaffoldConfig.footerConfig!;
      this.contentTitleCardConfig = this.scaffoldConfig.contentTitleCardConfig!;
      if (this.contentTitleCardConfig) {
        this.contentTitleCardConfig.label = 'Home';
      }
      this.floatingButtonConfig = this.scaffoldConfig.floatingButtonConfig!;
      this.bottomBarConfig = this.scaffoldConfig.bottomBarConfig!;
    }));

    this._subscription.add(this.scaffoldService.buttonClickEventValue$.subscribe((value: string) => {
      if (value === 'bottom-bar_submit') {
        this.bottomBarButtonClicked();
      } else if (value === 'bottom-bar_close') {
        this.bottomBarCloseClicked();
      }
    }));

    this._subscription.add(this.scaffoldService.headerInputChangeValue$.subscribe((value: string) => {
      this.inputValue = value;

      if (!this.inputValue) {
        this.cd.detectChanges();
      }
    }));
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public showContainerLoading(): void {
    this.scaffoldService.updateScaffoldProperty('loading', true);

    setTimeout(() => {
      this.scaffoldService.updateScaffoldProperty('loading', false);
    }, 3000);
  }

  public headerImgLogoChange(event: string): void {
    if (event) {
      this.headerConfig.svgLogo = '';
    } else {
      this.headerConfig.svgLogo = 'logo'
    }
  }

  public footerImgLogoChange(event: string): void {
    if (event) {
      this.footerConfig.svgLogo = '';
    } else {
      this.footerConfig.svgLogo = 'logo'
    }
  }

  public setTheme(theme: string): void {
    this.themeService.setTheme(theme, true);
  }

  public addHeaderButton(isLeftButton: boolean): void {
    if (!isLeftButton) {
      this.headerConfig.rightMenuButtons?.push({ id: '' });
    } else if (isLeftButton && !this.headerConfig?.leftMenuButton) {
      this.headerConfig.leftMenuButton = { id: '' };
    }
  }

  public removeHeaderButton(menuButton: MenuButton, isLeftButton: boolean): void {
    if (!isLeftButton) {
      this.headerConfig.rightMenuButtons = this.headerConfig.rightMenuButtons?.filter((button: MenuButton) => button !== menuButton);
    } else if (isLeftButton && this.headerConfig?.leftMenuButton === menuButton) {
      this.headerConfig.leftMenuButton = undefined;
    }
  }

  public updateDrawerContent(reset: boolean): void {
    this.scaffoldService.drawerPortal = reset ? null! : NotFoundComponent;
  }

  public bottomBarCloseClicked(): void {
    this.bottomBarDemoList.forEach(item => item.checked = false);
    this.updateBottomBar();
  }

  public bottomBarButtonClicked(): void {
    const selected: number = this.bottomBarDemoList.filter(item => item.checked).length;
    this.dialogService.openConfirmDialog({ title: 'Selection:', message: `You have selected ${selected} items`, closeLabel: 'Close', confirmLabel: 'Confirm' }).then(result => {
      this.logger.log('close result: ', result);
    });
  }

  public selectBottomBarItem(): void {
    this.updateBottomBar();
  }

  private updateBottomBar(): void {
    const selected: number = this.bottomBarDemoList.filter(item => item.checked).length;

    if (selected > 0) {
      this.bottomBarConfig.enable = true;
      this.bottomBarConfig.message = `${selected} selected`;
      this.bottomBarConfig.actions = [
        {
          id: 'bottom-bar_submit',
          label: 'Submit'
        }
      ];
    } else {
      this.bottomBarConfig.enable = false;
    }
  }

}
