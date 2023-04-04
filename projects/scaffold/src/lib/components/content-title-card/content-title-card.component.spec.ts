import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { ContentTitleCardComponent } from './content-title-card.component';

describe('ContentTitleCardComponent', () => {
  let component: ContentTitleCardComponent;
  let fixture: ComponentFixture<ContentTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentTitleCardComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
