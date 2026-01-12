import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { FloatingButtonComponent } from './floating-button.component';

describe('FloatingButtonComponent', () => {
  let component: FloatingButtonComponent;
  let fixture: ComponentFixture<FloatingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FloatingButtonComponent,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the button when enable is true and onTop is false', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeTruthy();
  });

  it('should not display the button when enable is false', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: false });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should not display the button when onTop is true', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true, autoHide: true });
    fixture.componentRef.setInput('onTop', true);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should emit the buttonClicked event when button is clicked', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true, id: 'id' });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    spyOn(component, 'buttonClicked');
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    button.triggerEventHandler('click', null);
    expect(component.buttonClicked).toHaveBeenCalledWith('id');
  });

  it('should display the label if it is provided', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true, label: 'Test Button' });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label.nativeElement.innerText).toEqual('Test Button');
  });

  it('should not display the label if it is not provided', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label).toBeFalsy();
  });
});
