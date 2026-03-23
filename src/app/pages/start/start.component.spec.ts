import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { Observable, of } from 'rxjs';
import { afterEach, vi } from 'vitest';
import { StartComponent } from './start.component';

const TEST_SVG_ICON: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>';

describe('StartpageComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  afterEach(() => {
    vi.useRealTimers();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
      ],
      providers: [
        provideRouter([]),
        { provide: ScaffoldService, useClass: MockScaffoldService }
      ]
    }).compileComponents();

    const iconRegistry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);
    const svgLiteral = sanitizer.bypassSecurityTrustHtml(TEST_SVG_ICON);
    iconRegistry.addSvgIconLiteral('logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('lf_logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('github_logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('npm_logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('cat_logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('waw_logo', svgLiteral);
    iconRegistry.addSvgIconLiteral('ugly_logo', svgLiteral);

    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable loading immediately and disable it after 2 seconds', () => {
    vi.useFakeTimers();

    const updateScaffoldPropertySpy = vi.spyOn(component.scaffoldService, 'updateScaffoldProperty');

    component.showContainerLoading();

    expect(updateScaffoldPropertySpy).toHaveBeenNthCalledWith(1, 'loading', true);

    vi.advanceTimersByTime(2000);

    expect(updateScaffoldPropertySpy).toHaveBeenNthCalledWith(2, 'loading', false);
  });
});

class MockScaffoldService {
  public scaffoldConfig$: Observable<ScaffoldConfig> = of({
    // ScaffoldConfig
    loading: false,
    scrollPositionRestoration: true,
    // HeaderConfig
    headerConfig: {
      enable: true,
      svgLogo: 'logo',
      title: 'Angular Scaffold',
      subtitle: `by Lukas Felbinger`,
      titleRouterLink: 'start',
      loading: false,
      showRouteLoading: true,
      leftMenuButton: {
        id: 'drawer',
        matIcon: 'menu'
      },
      rightMenuButtons: [
        {
          id: 'start',
          label: 'Demo'
        },
        {
          id: 'documentation',
          label: 'Documentation'
        },
        {
          id: 'typography',
          label: 'Typography'
        },
        {
          id: 'github',
          svgIcon: 'github_logo',
          tooltip: 'GitHub'
        }
      ],
      inputConfig: {
        enable: false,
        label: 'Search',
        matIcon: 'search'
      }
    },
    // NavbarConfig
    navbarConfig: {
      enable: false,
      showAllLabels: false,
      menuButtons: [
        {
          id: 'start',
          label: 'Demo',
          matIcon: 'home'
        },
        {
          id: 'components',
          label: 'Components',
          matIcon: 'widgets'
        },
        {
          id: 'documentation',
          label: 'Docs',
          matIcon: 'description'
        },
        {
          id: 'typography',
          label: 'Typography',
          matIcon: 'text_fields'
        }
      ]
    },
    // DrawerConfig
    drawerConfig: {
      enable: true,
      open: true,
      fixed: true
    },
    // FooterConfig
    footerConfig: {
      enable: true,
      svgLogo: 'logo',
      links: [
        {
          label: 'About',
          href: 'https://www.lukasfelbinger.at',
          externalTab: true
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lukfel/ng-scaffold',
          externalTab: true
        },
      ],
      copyright: '© Lukas Felbinger 2026. All rights reserved.'
    },
    // ContentTitleCardConfig
    contentTitleCardConfig: {
      enable: true,
      label: 'Example Title',
      showBackButton: true
    },
    // FloatingButtonConfig
    floatingButtonConfig: {
      enable: true,
      tooltip: 'To top'
    },
    // BottomBarConfig
    bottomBarConfig: {
      enable: false
    }
  });

  public buttonClickEventValue$: Observable<string> = of('');
  public headerInputChangeValue$: Observable<string> = of('');

  public updateScaffoldProperty<K extends keyof ScaffoldConfig>(property: K, value: Partial<ScaffoldConfig[K]> | ScaffoldConfig[K]): void {

  }
}
