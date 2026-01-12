import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';

describe('TypographyComponent', () => {
  let component: TypographyComponent;
  let fixture: ComponentFixture<TypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TypographyComponent,
        CommonModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
