import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { By, DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
        CommonModule,
        MatCardModule,
        MatIconModule
      ],
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    }).compileComponents();

    const iconRegistry = TestBed.inject(MatIconRegistry);
    const sanitizer = TestBed.inject(DomSanitizer);
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logos/logo.svg'));
    iconRegistry.addSvgIcon('lf_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
    iconRegistry.addSvgIcon('github_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
    iconRegistry.addSvgIcon('npm_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/npm.svg'));
    iconRegistry.addSvgIcon('cat_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/cat.svg'));
    iconRegistry.addSvgIcon('waw_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/waw.svg'));
    iconRegistry.addSvgIcon('ugly_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/uglygotchi.svg'));

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the footer if the config is enabled', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true });
    fixture.detectChanges();
    const footer = fixture.debugElement.query(By.css('.lf-footer'));
    expect(footer).toBeTruthy();
  });

  it('should not show the footer if the config is disabled', () => {
    fixture.componentRef.setInput('footerConfig', { enable: false });
    fixture.detectChanges();
    const footer = fixture.debugElement.query(By.css('.lf-footer'));
    expect(footer).toBeFalsy();
  });

  it('should display svg logo if provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true, svgLogo: 'logo' });
    fixture.detectChanges();
    const svgLogo = fixture.debugElement.query(By.css('.lf-footer mat-icon'));
    expect(svgLogo).toBeTruthy();
  });

  it('should display img logo if provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true, imgLogo: 'assets/img/meta.jpg' });
    fixture.detectChanges();
    const imgLogo = fixture.debugElement.query(By.css('.lf-footer img'));
    expect(imgLogo).toBeTruthy();
  });

  it('should not display logos if none provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true });
    fixture.detectChanges();
    const svgLogo = fixture.debugElement.query(By.css('.lf-footer-logo mat-icon'));
    const imgLogo = fixture.debugElement.query(By.css('.lf-footer-logo img'));
    expect(svgLogo).toBeFalsy();
    expect(imgLogo).toBeFalsy();
  });

  it('should display links if provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true, links: [{ label: 'Link 1', routerLink: '/link1' }, { label: 'Link 2', href: 'http://example.com', externalTab: true }] });
    fixture.detectChanges();
    const linkElements = fixture.debugElement.queryAll(By.css('.lf-footer-link'));
    expect(linkElements.length).toBe(2);
  });

  it('should not display links if none provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true });
    fixture.detectChanges();
    const linkElements = fixture.debugElement.queryAll(By.css('.lf-footer-link'));
    expect(linkElements.length).toBe(0);
  });

  it('should display copyright if provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true, copyright: 'Copyright © 2026' });
    fixture.detectChanges();
    const copyright = fixture.debugElement.query(By.css('.lf-footer-copyright'));
    expect((<HTMLElement>copyright.nativeElement).innerText).toContain('Copyright');
  });

  it('should not display copyright if none provided', () => {
    fixture.componentRef.setInput('footerConfig', { enable: true });
    fixture.detectChanges();
    const copyright = fixture.debugElement.query(By.css('.lf-footer-copyright'));
    expect(copyright).toBeFalsy();
  });
});
