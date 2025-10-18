import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the navbar if the config is enabled', () => {
    component.navbarConfig = {
      enable: true
    };
    fixture.detectChanges();
    const navbar = fixture.debugElement.query(By.css('.lf-navbar'));
    expect(navbar).toBeTruthy();
  });

  it('should not show the navbar if the config is disabled', () => {
    component.navbarConfig = {
      enable: false
    };
    fixture.detectChanges();
    const navbar = fixture.debugElement.query(By.css('.lf-navbar'));
    expect(navbar).toBeFalsy();
  });
});
