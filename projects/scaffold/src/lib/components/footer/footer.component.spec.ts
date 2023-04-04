import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the footer if the config is enabled', () => {
    component.footerConfig = {
      enable: true
    };
    fixture.detectChanges();
    const footer = fixture.debugElement.query(By.css('.lf-footer'));
    expect(footer).toBeTruthy();
  });

  it('should not show the footer if the config is disabled', () => {
    component.footerConfig = {
      enable: false
    };
    fixture.detectChanges();
    const footer = fixture.debugElement.query(By.css('.lf-footer'));
    expect(footer).toBeFalsy();
  });

  it('should display svg logo if provided', () => {
    component.footerConfig = { enable: true, svgLogo: 'logo' };
    fixture.detectChanges();
    const svgLogo = fixture.debugElement.query(By.css('.lf-footer mat-icon'));
    expect(svgLogo).toBeTruthy();
  });

  it('should display img logo if provided', () => {
    component.footerConfig = { enable: true, imgLogo: 'logo.png' };
    fixture.detectChanges();
    const imgLogo = fixture.debugElement.query(By.css('.lf-footer img'));
    expect(imgLogo).toBeTruthy();
  });

  it('should not display logos if none provided', () => {
    component.footerConfig = { enable: true };
    fixture.detectChanges();
    const svgLogo = fixture.debugElement.query(By.css('.lf-footer-logo mat-icon'));
    const imgLogo = fixture.debugElement.query(By.css('.lf-footer-logo img'));
    expect(svgLogo).toBeFalsy();
    expect(imgLogo).toBeFalsy();
  });

  it('should display links if provided', () => {
    component.footerConfig = {
      enable: true,
      links: [
        { label: 'Link 1', routerLink: '/link1' },
        { label: 'Link 2', href: 'http://example.com', externalTab: true },
      ]
    };
    fixture.detectChanges();
    const linkElements = fixture.debugElement.queryAll(By.css('.lf-footer-link'));
    expect(linkElements.length).toBe(2);
  });

  it('should not display links if none provided', () => {
    component.footerConfig = { enable: true };
    fixture.detectChanges();
    const linkElements = fixture.debugElement.queryAll(By.css('.lf-footer-link'));
    expect(linkElements.length).toBe(0);
  });

  it('should display copyright if provided', () => {
    component.footerConfig = { enable: true, copyright: 'Copyright © 2023' };
    fixture.detectChanges();
    const copyright = fixture.debugElement.query(By.css('.lf-footer-copyright'));
    expect((<HTMLElement>copyright.nativeElement).innerText).toContain('Copyright');
  });

  it('should not display copyright if none provided', () => {
    component.footerConfig = { enable: true };
    fixture.detectChanges();
    const copyright = fixture.debugElement.query(By.css('.lf-footer-copyright'));
    expect(copyright).toBeFalsy();
  });
});
