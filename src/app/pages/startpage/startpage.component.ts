import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { BottomBarConfig, ContentTitleCardConfig, DialogService, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, LoadingOverlayConfig, Logger, MenuButton, NavbarConfig, NavigationLink, ScaffoldConfig, ScaffoldService, ThemeService } from '@lukfel/ng-scaffold';
import { Subscription } from 'rxjs';
import { MarkdownComponent, MarkdownDialogData } from 'src/app/shared/components/markdown/markdown.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class StartpageComponent implements OnInit, OnDestroy {

  private scaffoldService = inject(ScaffoldService);
  private themeService = inject(ThemeService);
  private dialogService = inject(DialogService);
  private logger = inject(Logger);


  public scaffoldConfig: ScaffoldConfig = {};
  public loadingOverlayConfig: LoadingOverlayConfig = {};
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
      this.loadingOverlayConfig = this.scaffoldConfig.loadingOverlayConfig || {};
      this.headerConfig = this.scaffoldConfig.headerConfig!;
      this.navbarConfig = this.scaffoldConfig.navbarConfig!;
      this.drawerConfig = this.scaffoldConfig.drawerConfig!;
      this.footerConfig = this.scaffoldConfig.footerConfig!;
      this.contentTitleCardConfig = this.scaffoldConfig.contentTitleCardConfig!;
      if (this.contentTitleCardConfig) {
        this.contentTitleCardConfig.label = 'Demo';
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
    }));
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  public copyConfig(): void {
    const replacer = (key: string, value: any): void => {

      // Remove empty strings, null, undefined, false
      if (value === '' || value === null || value === undefined || value === false) {
        return undefined;
      }

      // Remove objects with { enable: false }
      if (value && typeof value === 'object' && 'enable' in value && value.enable === false) {
        return undefined;
      }

      // Remove empty objects
      if (value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
        return undefined;
      }

      return value;
    };

    const formatted: string = 'public scaffoldConfig: ScaffoldConfig = ' + JSON.stringify(this.scaffoldConfig, replacer, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, '\'');
    this.openMarkdownDialog('Copy current config', '', formatted, true)
  }

  public openMarkdownDialog(title: string, file: string, data?: string, showCopy: boolean = false): void {
    this.dialogService.openCustomDialog(MarkdownComponent, {
      autoFocus: false,
      data: {
        title,
        src: file ? `assets/md/${file}` : '',
        data,
        showCopy
      } as MarkdownDialogData,
      maxWidth: '1000px'
    });
  }

  public showContainerLoading(): void {
    this.scaffoldService.updateScaffoldProperty('loading', true);

    setTimeout(() => {
      this.scaffoldService.updateScaffoldProperty('loading', false);
    }, 2000);
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

  public removeHeaderButton(menuButton: MenuButton, isLeftButton: boolean, isNavButton: boolean): void {
    if (isNavButton) {
      this.navbarConfig.buttons = this.navbarConfig.buttons?.filter((button: MenuButton) => button !== menuButton);
    } else if (!isLeftButton) {
      this.headerConfig.rightMenuButtons = this.headerConfig.rightMenuButtons?.filter((button: MenuButton) => button !== menuButton);
    } else if (isLeftButton && this.headerConfig?.leftMenuButton === menuButton) {
      this.headerConfig.leftMenuButton = undefined;
    }
  }

  public addNavButton(): void {
    this.navbarConfig.buttons?.push({ id: '' });
  }

  public addFooterLink(): void {
    this.footerConfig.links?.push({});
  }

  public removeFooterLink(navigationLink: NavigationLink): void {
    this.footerConfig.links = this.footerConfig.links?.filter((link: NavigationLink) => link !== navigationLink);
  }

  public updateDrawerContent(reset: boolean): void {
    this.scaffoldService.drawerPortal = reset ? null! : NotFoundComponent;
  }

  public bottomBarButtonClicked(): void {
    const selected: number = this.bottomBarDemoList.filter(item => item.checked).length;
    this.dialogService.openConfirmDialog({ title: 'Selection:', message: `You have selected ${selected} items`, closeLabel: 'Close', confirmLabel: 'Confirm' }).then(result => {
      this.logger.log('close result: ', result);
    });
  }

  public bottomBarCloseClicked(): void {
    this.bottomBarDemoList.forEach(item => item.checked = false);
    this.updateBottomBar();
  }

  public selectBottomBarItem(): void {
    this.updateBottomBar();
  }

  private updateBottomBar(): void {
    const selected: number = this.bottomBarDemoList.filter(item => item.checked).length;

    if (selected > 0) {
      this.bottomBarConfig.enable = true;
      this.bottomBarConfig.message = `${selected} selected`;
      this.bottomBarConfig.buttons = [
        {
          id: 'bottom-bar_submit',
          label: 'Submit'
        },
      ];
    } else {
      this.bottomBarConfig.enable = false;
    }
  }

}
