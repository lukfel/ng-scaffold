import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { Subject } from 'rxjs';
import { afterEach, vi } from 'vitest';
import { Logger } from '../../services';
import { ScaffoldService } from '../../services/scaffold.service';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { ContentTitleCardComponent } from '../content-title-card/content-title-card.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { FloatingButtonComponent } from '../floating-button/floating-button.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScaffoldComponent } from './scaffold.component';

class MockLogger { }

describe('ScaffoldComponent', () => {
  let component: ScaffoldComponent;
  let fixture: ComponentFixture<ScaffoldComponent>;
  let fragment$: Subject<string | null>;
  let scaffoldService: ScaffoldService;

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  beforeEach(async () => {
    fragment$ = new Subject<string | null>();

    await TestBed.configureTestingModule({
      imports: [
        ScaffoldComponent,
        CommonModule,
        HeaderComponent,
        NavbarComponent,
        DrawerComponent,
        FooterComponent,
        ContentTitleCardComponent,
        FloatingButtonComponent,
        BottomBarComponent
      ],
      providers: [
        provideRouter([]),
        provideAnimations(),
        { provide: ActivatedRoute, useValue: { fragment: fragment$.asObservable() } },
        { provide: Logger, useClass: MockLogger }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScaffoldComponent);
    component = fixture.componentInstance;
    scaffoldService = TestBed.inject(ScaffoldService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    scaffoldService.scaffoldConfig = { headerConfig: { enable: true } };
    fixture.detectChanges();
    const headerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );
    expect(headerDebugElement).toBeTruthy();
  });


  it('should render the navbar component', () => {
    scaffoldService.scaffoldConfig = { navbarConfig: { enable: true } };
    fixture.detectChanges();
    const navbarDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(NavbarComponent)
    );
    expect(navbarDebugElement).toBeTruthy();
  });

  it('should render the drawer component', () => {
    scaffoldService.scaffoldConfig = { drawerConfig: { enable: true } };
    fixture.detectChanges();
    const drawerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(DrawerComponent)
    );
    expect(drawerDebugElement).toBeTruthy();
  });

  it('should render the title card component', () => {
    scaffoldService.scaffoldConfig = { contentTitleCardConfig: { enable: true } };
    fixture.detectChanges();
    const titleDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(ContentTitleCardComponent)
    );
    expect(titleDebugElement).toBeTruthy();
  });

  it('should render the footer component', () => {
    scaffoldService.scaffoldConfig = { footerConfig: { enable: true } };
    fixture.detectChanges();
    const footerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(footerDebugElement).toBeTruthy();
  });

  it('should render the floating button component', () => {
    scaffoldService.scaffoldConfig = { floatingButtonConfig: { enable: true } };
    fixture.detectChanges();
    const buttonDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(FloatingButtonComponent)
    );
    expect(buttonDebugElement).toBeTruthy();
  });

  it('should render the bottom bar component', () => {
    scaffoldService.scaffoldConfig = { bottomBarConfig: { enable: true } };
    fixture.detectChanges();
    const buttonDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(BottomBarComponent)
    );
    expect(buttonDebugElement).toBeTruthy();
  });

  it('should scroll to the fragment element when anchor scrolling is enabled', async () => {
    vi.useFakeTimers();

    const scrollIntoViewSpy = vi.fn();
    const requestAnimationFrameSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback): number => {
      return window.setTimeout(() => callback(0), 0);
    });
    const getElementByIdSpy = vi.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: scrollIntoViewSpy
    } as unknown as HTMLElement);

    scaffoldService.scaffoldConfig = { anchorScrolling: true };

    fragment$.next('target-anchor');
    await vi.runAllTimersAsync();

    expect(requestAnimationFrameSpy).toHaveBeenCalled();
    expect(getElementByIdSpy).toHaveBeenCalledWith('target-anchor');
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'auto', block: 'start', inline: 'nearest' });
  });
});
