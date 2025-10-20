import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
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
        RouterTestingModule,
        PlaceholderComponent,
        FileUploadComponent,
        ListComponent
      ]
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
