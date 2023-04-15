import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the header if the config is enabled', () => {
    component.headerConfig = {
      enable: true
    };
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('.lf-header'));
    expect(header).toBeTruthy();
  });

  it('should not show the header if the config is disabled', () => {
    component.headerConfig = {
      enable: false
    };
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('.lf-header'));
    expect(header).toBeFalsy();
  });

  it('should display title and subtitle if they are provided', () => {
    component.headerConfig = {
      enable: true,
      title: 'Test Title',
      subtitle: 'Test Subtitle',
    };
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.lf-header-title');
    const subtitleElement = fixture.nativeElement.querySelector('.lf-header-subtitle');
    expect(titleElement.textContent).toContain('Test Title');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should not display title and subtitle if they are not provided', () => {
    component.headerConfig = {
      enable: true,
      title: '',
      subtitle: '',
    };
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.lf-header-title');
    const subtitleElement = fixture.nativeElement.querySelector('.lf-header-subtitle');
    expect(titleElement).toBeNull();
    expect(subtitleElement).toBeNull();
  });

  it('should display loading bar when "loading" property is true', () => {
    component.headerConfig = {
      enable: true,
      loading: true,
    };
    fixture.detectChanges();
    const loadingBarElement = fixture.nativeElement.querySelector('.lf-header-progress-bar');
    expect(loadingBarElement).toBeTruthy();
  });

  it('should display loading bar when "showRouteLoading" property is true and route is loading', () => {
    component.headerConfig = {
      enable: true,
      showRouteLoading: true,
    };
    component.routeLoading = true;
    fixture.detectChanges();
    const loadingBarElement = fixture.nativeElement.querySelector('.lf-header-progress-bar');
    expect(loadingBarElement).toBeTruthy();
  });

  it('should not display loading bar when neither "loading" nor "showRouteLoading" properties are true', () => {
    component.headerConfig = {
      enable: true,
    };
    fixture.detectChanges();
    const loadingBarElement = fixture.nativeElement.querySelector('.lf-header-progress-bar');
    expect(loadingBarElement).toBeNull();
  });

  it('should display menu button with icon when "matIcon" is provided', () => {
    component.headerConfig = {
      enable: true,
      leftMenuButton: {
        id: 'menu',
        matIcon: 'menu',
        tooltip: 'Menu Button Tooltip',
      },
    };
    fixture.detectChanges();
    const menuButtonElement = fixture.nativeElement.querySelector('.lf-header-menu-button');
    expect(menuButtonElement).toBeTruthy();
    expect(menuButtonElement.querySelector('mat-icon').textContent).toContain('menu');
  });

  it('should display the input if headerConfig.inputConfig.enable is true', () => {
    component.headerConfig = {
      enable: true,
      inputConfig: {
        enable: true
      }
    };
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('lf-input'));
    expect(inputElement).toBeTruthy();
  });
});
