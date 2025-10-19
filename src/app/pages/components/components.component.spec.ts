import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsComponent],
      imports: [
        SharedModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        PlaceholderComponent,
        FileUploadComponent,
        ListComponent
      ],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
