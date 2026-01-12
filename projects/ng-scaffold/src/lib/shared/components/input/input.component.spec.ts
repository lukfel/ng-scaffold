import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputComponent,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the label to "Search" if no label is provided', () => {
    const labelElement = fixture.debugElement.query(By.css('mat-label')).nativeElement;
    expect(labelElement.textContent.trim()).toBe('Search');
  });

  it('should set the label to the provided value if a label is provided', () => {
    component.inputConfig.label = 'Test';
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('mat-label')).nativeElement;
    expect(labelElement.textContent.trim()).toBe('Test');
  });

  it('should display the hint if a hint is provided', () => {
    component.inputConfig.hint = 'Test hint';
    fixture.detectChanges();
    const hintElement = fixture.debugElement.query(By.css('mat-hint')).nativeElement;
    expect(hintElement.textContent.trim()).toBe('Test hint');
  });

  it('should hide the hint if no hint is provided', () => {
    const hintElement = fixture.debugElement.query(By.css('mat-hint'));
    expect(hintElement).toBeFalsy();
  });

  it('should enable the input if not disabled', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.disabled).toBeFalsy();
  });

  it('should call inputChanged when input value is changed', () => {
    spyOn(component, 'inputChanged');
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.inputChanged).toHaveBeenCalledWith('test');
  });
});
