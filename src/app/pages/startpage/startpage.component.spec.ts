import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldConfig, ScaffoldService } from '@lukfel/ng-scaffold';
import { Observable, of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StartpageComponent } from './startpage.component';

describe('StartpageComponent', () => {
  let component: StartpageComponent;
  let fixture: ComponentFixture<StartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartpageComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ScaffoldService, useClass: MockScaffoldService }
      ]
    })
      .compileComponents();

    const iconRegistry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logos/logo.svg'));
    iconRegistry.addSvgIcon('lf_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    iconRegistry.addSvgIcon('github_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
    iconRegistry.addSvgIcon('npm_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/npm.svg'));
    iconRegistry.addSvgIcon('cat_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/cat.svg'));
    iconRegistry.addSvgIcon('waw_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/waw.svg'));
    iconRegistry.addSvgIcon('ugly_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/uglygotchi.svg'));

    fixture = TestBed.createComponent(StartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
        matIcon: 'menu',
        outlineIcon: true
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
          matIcon: 'home',
          outlineIcon: true
        },
        {
          id: 'components',
          label: 'Components',
          matIcon: 'widgets',
          outlineIcon: true
        },
        {
          id: 'documentation',
          label: 'Docs',
          matIcon: 'description',
          outlineIcon: true
        },
        {
          id: 'typography',
          label: 'Typography',
          matIcon: 'text_fields',
          outlineIcon: true
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
      copyright: '© Lukas Felbinger 2023. All rights reserved.'
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
}
