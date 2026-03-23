import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorPickerComponent, FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
import { ComponentsComponent } from './components.component';

const TEST_SVG_ICON: string = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>';

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
  const svgLiteral = sanitizer.bypassSecurityTrustHtml(TEST_SVG_ICON);
  iconRegistry.addSvgIconLiteral('logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('lf_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('github_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('npm_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('cat_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('waw_logo', svgLiteral);
  iconRegistry.addSvgIconLiteral('ugly_logo', svgLiteral);

    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
