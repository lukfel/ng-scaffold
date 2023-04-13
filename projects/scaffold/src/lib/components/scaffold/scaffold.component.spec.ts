import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Logger } from '../../services';
import { SharedModule } from '../../shared/shared.module';
import { ContentTitleCardComponent } from '../content-title-card/content-title-card.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { FloatingButtonComponent } from '../floating-button/floating-button.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoadingOverlayComponent } from '../loading-overlay/loading-overlay.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScaffoldComponent } from './scaffold.component';

// @Component({
//   selector: 'lf-header',
//   template: ''
// })
// class MockHeaderComponent {
//   @Input() public headerConfig: HeaderConfig = {};
//   @Input() public isMobile: boolean = false;
//   @Input() public routeLoading: boolean = false;
// }

class MockLogger { }

describe('ScaffoldComponent', () => {
  let component: ScaffoldComponent;
  let fixture: ComponentFixture<ScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // MockHeaderComponent
        ScaffoldComponent,
        LoadingOverlayComponent,
        HeaderComponent,
        NavbarComponent,
        DrawerComponent,
        ContentTitleCardComponent,
        FooterComponent,
        FloatingButtonComponent
      ],
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Logger, useClass: MockLogger }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    component.headerConfig = { enable: true };
    fixture.detectChanges();
    const headerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );
    expect(headerDebugElement).toBeTruthy();
  });


  it('should render the navbar component', () => {
    component.navbarConfig = { enable: true };
    fixture.detectChanges();
    const navbarDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(NavbarComponent)
    );
    expect(navbarDebugElement).toBeTruthy();
  });

  it('should render the drawer component', () => {
    component.drawerConfig = { enable: true };
    fixture.detectChanges();
    const drawerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(DrawerComponent)
    );
    expect(drawerDebugElement).toBeTruthy();
  });

  it('should render the title component', () => {
    component.contentTitleCardConfig = { enable: true };
    fixture.detectChanges();
    const titleDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(ContentTitleCardComponent)
    );
    expect(titleDebugElement).toBeTruthy();
  });

  it('should render the footer component', () => {
    component.footerConfig = { enable: true };
    fixture.detectChanges();
    const footerDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(footerDebugElement).toBeTruthy();
  });

  it('should render the button component', () => {
    component.floatingButtonConfig = { enable: true };
    fixture.detectChanges();
    const buttonDebugElement: DebugElement = fixture.debugElement.query(
      By.directive(FloatingButtonComponent)
    );
    expect(buttonDebugElement).toBeTruthy();
  });
});
