import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        CommonModule,
        MatIconModule,
        MatTooltipModule
      ],
      providers: [provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the navbar if the config is enabled', () => {
    fixture.componentRef.setInput('navbarConfig', { enable: true });
    fixture.detectChanges();
    const navbar = fixture.debugElement.query(By.css('.lf-navbar'));
    expect(navbar).toBeTruthy();
  });

  it('should not show the navbar if the config is disabled', () => {
    fixture.componentRef.setInput('navbarConfig', { enable: false });
    fixture.detectChanges();
    const navbar = fixture.debugElement.query(By.css('.lf-navbar'));
    expect(navbar).toBeFalsy();
  });
});
