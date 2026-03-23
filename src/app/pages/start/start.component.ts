import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
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
import { BottomBarConfig, ContentTitleCardConfig, DialogService, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, HeaderInputConfig, LoadingOverlayConfig, Logger, MenuButton, NavbarConfig, NavigationLink, ScaffoldConfig, ScaffoldService, ThemeService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';
import { MarkdownComponent, MarkdownDialogData } from 'src/app/shared/components/markdown/markdown.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
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
    MatDividerModule,
    NgTemplateOutlet
]
})
export class StartComponent {

  public scaffoldService = inject(ScaffoldService);
  private themeService = inject(ThemeService);
  private dialogService = inject(DialogService);
  private logger = inject(Logger);


  public scaffoldConfig = toSignal<ScaffoldConfig | null>(this.scaffoldService.scaffoldConfig$, { initialValue: null });
  public loadingOverlayConfig = computed<LoadingOverlayConfig>(() => this.scaffoldConfig()?.loadingOverlayConfig || {});
  public headerConfig = computed<HeaderConfig>(() => this.scaffoldConfig()?.headerConfig || {});
  public navbarConfig = computed<NavbarConfig>(() => this.scaffoldConfig()?.navbarConfig || {});
  public drawerConfig = computed<DrawerConfig>(() => this.scaffoldConfig()?.drawerConfig || {});
  public footerConfig = computed<FooterConfig>(() => this.scaffoldConfig()?.footerConfig || {});
  public contentTitleCardConfig = computed<ContentTitleCardConfig>(() => this.scaffoldConfig()?.contentTitleCardConfig || {});
  public floatingButtonConfig = computed<FloatingButtonConfig>(() => this.scaffoldConfig()?.floatingButtonConfig || {});
  public bottomBarConfig = computed<BottomBarConfig>(() => this.scaffoldConfig()?.bottomBarConfig || {});

  public bottomBarDemoList = signal([
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
  ]);

  public theme = toSignal<string>(this.themeService.currentTheme$);
  public inputValue = toSignal<string>(this.scaffoldService.headerInputChangeValue$);


  constructor() {
    this.scaffoldService.scaffoldConfig$.pipe(take(1), takeUntilDestroyed()).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if(scaffoldConfig) {
        this.scaffoldService.updateScaffoldProperty('contentTitleCardConfig', { label: 'Demo' });
      }
    });

    this.scaffoldService.buttonClickEventValue$.pipe(takeUntilDestroyed()).subscribe((value: string) => {
      if (value === 'bottom-bar_submit') {
        this.bottomBarButtonClicked();
      } else if (value === 'bottom-bar_close') {
        this.bottomBarCloseClicked();
      }
    });
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

    const formatted: string = 'public scaffoldConfig: ScaffoldConfig = ' + JSON.stringify(this.scaffoldConfig(), replacer, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, '\'');
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

  public updateInputConfig(key: keyof HeaderInputConfig, value: string): void {
    this.scaffoldService.updateScaffoldProperty('headerConfig', {
      inputConfig: { ...this.headerConfig()?.inputConfig, [key]: value },
    })
  }

  public headerImgLogoChange(event: string): void {
    if (event) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { svgLogo: '' });
    } else {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { svgLogo: 'logo' });
    }
  }

  public footerImgLogoChange(event: string): void {
    if (event) {
      this.scaffoldService.updateScaffoldProperty('footerConfig', { svgLogo: '' });
    } else {
      this.scaffoldService.updateScaffoldProperty('footerConfig', { svgLogo: 'logo' });
    }
  }

  public setTheme(theme: string): void {
    this.themeService.setTheme(theme, true);
  }

  public addHeaderButton(isLeftButton: boolean): void {
    if (!isLeftButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { rightMenuButtons: [...this.headerConfig()!.rightMenuButtons || [], { id: '' }] });
    } else if (isLeftButton && !this.headerConfig()?.leftMenuButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { leftMenuButton: { id: '' } });
    }
  }

  public removeHeaderButton(menuButton: MenuButton, isLeftButton: boolean, isNavButton: boolean): void {
    if (isNavButton) {
      this.scaffoldService.updateScaffoldProperty('navbarConfig', { buttons: this.navbarConfig()!.buttons?.filter((button: MenuButton) => button !== menuButton) });
    } else if (!isLeftButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { rightMenuButtons: this.headerConfig()!.rightMenuButtons?.filter((button: MenuButton) => button !== menuButton) });
    } else if (isLeftButton && this.headerConfig()?.leftMenuButton === menuButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', { leftMenuButton: undefined });
    }
  }

  public updateHeaderButton(menuButton: MenuButton, isLeftButton: boolean, isNavButton: boolean, key: keyof MenuButton, value: string): void {
    if (isNavButton) {
      this.scaffoldService.updateScaffoldProperty('navbarConfig', {
        buttons: this.navbarConfig()?.buttons?.map(button =>
          button === menuButton ? { ...button, [key]: value } : button
        )
      });
    } else if (!isLeftButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', {
        rightMenuButtons: this.headerConfig()?.rightMenuButtons?.map(button =>
          button === menuButton ? { ...button, [key]: value } : button
        )
      });
    } else if (isLeftButton && this.headerConfig()?.leftMenuButton === menuButton) {
      this.scaffoldService.updateScaffoldProperty('headerConfig', {
        leftMenuButton: {
          ...this.headerConfig()!.leftMenuButton!,
          [key]: value
        }
      });
    }
  }

  public addNavButton(): void {
    this.scaffoldService.updateScaffoldProperty('navbarConfig', { buttons: [...this.navbarConfig()!.buttons || [], { id: '' }] });
  }

  public addFooterLink(): void {
    this.scaffoldService.updateScaffoldProperty('footerConfig', { links: [...this.footerConfig()!.links || [], {}] });
  }

  public removeFooterLink(navigationLink: NavigationLink): void {
    this.scaffoldService.updateScaffoldProperty('footerConfig', { links: this.footerConfig()!.links?.filter((link: NavigationLink) => link !== navigationLink) });
  }

  public updateFooterLink(navigationLink: NavigationLink, key: keyof NavigationLink, value: string): void {
    this.scaffoldService.updateScaffoldProperty('footerConfig', {
      links: this.footerConfig()?.links?.map(link =>
        link === navigationLink ? { ...link, [key]: value } : link
      )
    });
  }

  public updateDrawerContent(reset: boolean): void {
    this.scaffoldService.drawerPortal = reset ? null! : NotFoundComponent;
  }

  public async bottomBarButtonClicked(): Promise<void> {
    const selected: number = this.bottomBarDemoList().filter(item => item.checked).length;
    const result: boolean = await this.dialogService.openConfirmDialog({ title: 'Selection:', message: `You have selected ${selected} items`, closeLabel: 'Close', confirmLabel: 'Confirm' });
    this.logger.log('close result: ', result);
  }

  public bottomBarCloseClicked(): void {
    this.bottomBarDemoList.update(list => list.map(item => ({ ...item, checked: false })));
    this.updateBottomBar();
  }

  public selectBottomBarItem(): void {
    this.updateBottomBar();
  }

  private updateBottomBar(): void {
    const selected: number = this.bottomBarDemoList().filter(item => item.checked).length;

    if (selected > 0) {
      this.scaffoldService.updateScaffoldProperty('bottomBarConfig', {
        enable: true,
        message: `${selected} selected`,
        buttons: [
          {
            id: 'bottom-bar_submit',
            label: 'Submit'
          }
        ]
      });
    } else {
      this.scaffoldService.updateScaffoldProperty('bottomBarConfig', { enable: false });
    }
  }
}
