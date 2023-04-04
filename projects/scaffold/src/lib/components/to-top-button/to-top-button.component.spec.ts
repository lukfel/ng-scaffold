import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { ToTopButtonComponent } from './to-top-button.component';

describe('ToTopButtonComponent', () => {
  let component: ToTopButtonComponent;
  let fixture: ComponentFixture<ToTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToTopButtonComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the button if enabled and not auto hidden', () => {
    component.toTopButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-to-top-button'));
    expect(button).toBeTruthy();
  });

  it('should not show the button if disabled', () => {
    component.toTopButtonConfig = { enable: false, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-to-top-button'));
    expect(button).toBeFalsy();
  });

  it('should not show the button if auto hidden', () => {
    component.toTopButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-to-top-button'));
    expect(button).toBeFalsy();
  });

  it('should set the bottom position of the button', () => {
    component.toTopButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    expect(component.getBottomPosition()).toBeGreaterThan(0);
  });

  it('should emit backToTop event when clicked', () => {
    spyOn(component, 'backToTop');
    component.toTopButtonConfig = { enable: true, tooltip: 'Back to top' };
    component.autoHide = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-to-top-button'));
    button.triggerEventHandler('click', null);
    expect(component.backToTop).toHaveBeenCalled();
  });
});
