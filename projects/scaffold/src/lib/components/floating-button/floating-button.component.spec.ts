import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { FloatingButtonComponent } from './floating-button.component';

describe('FloatingButtonComponent', () => {
  let component: FloatingButtonComponent;
  let fixture: ComponentFixture<FloatingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingButtonComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the button if enabled and not auto hidden', () => {
    component.floatingButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeTruthy();
  });

  it('should not show the button if disabled', () => {
    component.floatingButtonConfig = { enable: false, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should not show the button if auto hidden', () => {
    component.floatingButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should set the bottom position of the button', () => {
    component.floatingButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    expect(component.getBottomPosition()).toBeGreaterThan(0);
  });

  it('should emit backToTop event when clicked', () => {
    spyOn(component, 'backToTop');
    component.floatingButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    button.triggerEventHandler('click', null);
    expect(component.backToTop).toHaveBeenCalled();
  });
});
