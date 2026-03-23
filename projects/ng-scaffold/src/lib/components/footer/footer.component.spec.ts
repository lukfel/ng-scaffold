import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { By, DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer.component';

const TEST_SVG_ICON: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>';

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
  const svgLiteral = sanitizer.bypassSecurityTrustHtml(TEST_SVG_ICON);
  iconRegistry.addSvgIconLiteral('logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('lf_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('github_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('npm_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('cat_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('waw_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('ugly_logo', svgLiteral);

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
