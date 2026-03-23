import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(DocumentationComponent, {
      set: {
        template: '<div class="documentation-test"></div>'
      }
    });

    await TestBed.configureTestingModule({
      imports: [
        DocumentationComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
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
