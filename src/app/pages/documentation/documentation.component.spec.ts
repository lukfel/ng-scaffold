import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { DocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DocumentationComponent,
        CommonModule,
        MarkdownModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        { provide: ActivatedRoute, useValue: {} },
        provideMarkdown()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
