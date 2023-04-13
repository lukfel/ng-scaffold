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

  it('should display the button when enable is true and onTop is false', () => {
    component.floatingButtonConfig = { enable: true };
    component.onTop = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeTruthy();
  });

  it('should not display the button when enable is false', () => {
    component.floatingButtonConfig = { enable: false };
    component.onTop = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should not display the button when onTop is true', () => {
    component.floatingButtonConfig = { enable: true, autoHide: true };
    component.onTop = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button).toBeFalsy();
  });

  it('should set the button position based on getBottomPosition()', () => {
    spyOn(component, 'getBottomPosition').and.returnValue(10);
    component.floatingButtonConfig = { enable: true };
    component.onTop = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    expect(button.styles['bottom']).toEqual('10px');
  });

  it('should emit the buttonClicked event when button is clicked', () => {
    spyOn(component, 'buttonClicked');
    component.floatingButtonConfig = { enable: true };
    component.onTop = false;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    button.triggerEventHandler('click', null);
    expect(component.buttonClicked).toHaveBeenCalledWith(component.floatingButtonConfig.id);
  });

  it('should display the label if it is provided', () => {
    component.floatingButtonConfig = { enable: true, label: 'Test Button' };
    component.onTop = false;
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label.nativeElement.innerText).toEqual('Test Button');
  });

  it('should not display the label if it is not provided', () => {
    component.floatingButtonConfig = { enable: true };
    component.onTop = false;
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label).toBeFalsy();
  });
});
