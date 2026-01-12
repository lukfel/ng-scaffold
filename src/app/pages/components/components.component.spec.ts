import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorPickerComponent, FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatDividerModule,
        PlaceholderComponent,
        FileUploadComponent,
        ColorPickerComponent,
        ListComponent
      ],
      providers: [
        provideHttpClient(),
        { provide: ActivatedRoute, useValue: {} }
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

    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
