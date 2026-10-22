import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';
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
    vi.spyOn(component, 'buttonClicked');
    const button = fixture.debugElement.query(By.css('.lf-floating-button'));
    button.triggerEventHandler('click', null);
    expect(component.buttonClicked).toHaveBeenCalledWith('id');
  });

  it('should display the label if it is provided', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true, label: 'Test Button' });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label.nativeElement.innerText.trim()).toEqual('Test Button');
  });

  it('should not display the label if it is not provided', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.componentRef.setInput('onTop', false);
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.lf-floating-button-label'));
    expect(label).toBeFalsy();
  });

  it('renders a single button without a secondary', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.lf-floating-button')).length).toBe(1);
    expect(
      fixture.debugElement.query(By.css('.lf-floating-button-group')).nativeElement.classList
    ).not.toContain('split');
  });

  // The group owns the shape only when it has two halves to hold together
  it('splits the button when a secondary is configured', () => {
    fixture.componentRef.setInput('floatingButtonConfig', {
      enable: true,
      secondaryButton: { id: 'print', matIcon: 'print' }
    });
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.lf-floating-button')).length).toBe(2);
    expect(
      fixture.debugElement.query(By.css('.lf-floating-button-group')).nativeElement.classList
    ).toContain('split');
  });

  // M2 sizes an extended fab 48px and a round one 56px, so a mixed pair cannot line up
  it('gives the secondary the same variant as the primary', () => {
    fixture.componentRef.setInput('floatingButtonConfig', {
      enable: true,
      label: 'Save',
      secondaryButton: { id: 'print', matIcon: 'print' }
    });
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('.lf-floating-button'));
    expect(buttons.length).toBe(2);
    buttons.forEach((button) =>
      expect(button.nativeElement.classList).toContain('mat-mdc-extended-fab')
    );
  });

  it('keeps both halves round when the primary has no label', () => {
    fixture.componentRef.setInput('floatingButtonConfig', {
      enable: true,
      secondaryButton: { id: 'print', matIcon: 'print' }
    });
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('.lf-floating-button'));
    buttons.forEach((button) =>
      expect(button.nativeElement.classList).not.toContain('mat-mdc-extended-fab')
    );
  });

  it('emits the id of the secondary button', () => {
    const clicked: string[] = [];
    component.floatingButtonClickEvent.subscribe((id: string) => clicked.push(id));
    fixture.componentRef.setInput('floatingButtonConfig', {
      enable: true,
      id: 'primary',
      secondaryButton: { id: 'print', matIcon: 'print' }
    });
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.lf-floating-button-secondary')).nativeElement.click();

    expect(clicked).toEqual(['print']);
  });

  it('opens a menu instead when the secondary carries menuButtons', () => {
    const clicked: string[] = [];
    component.floatingButtonClickEvent.subscribe((id: string) => clicked.push(id));
    fixture.componentRef.setInput('floatingButtonConfig', {
      enable: true,
      secondaryButton: {
        id: 'more',
        matIcon: 'expand_less',
        menuButtons: [{ id: 'print', matIcon: 'print', label: 'Print' }]
      }
    });
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.lf-floating-button-secondary')).nativeElement.click();
    fixture.detectChanges();
    (document.querySelector('.mat-mdc-menu-item') as HTMLElement).click();

    expect(clicked).toContain('print');
  });

  it('marks the button to clear a bottom snackbar', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.componentRef.setInput('bottomSnackbarOpen', true);
    fixture.detectChanges();
    const group = fixture.debugElement.query(By.css('.lf-floating-button-group'));
    expect(group.nativeElement.classList).toContain('show-snackbar');
  });

  it('does not mark the button when no bottom snackbar is open', () => {
    fixture.componentRef.setInput('floatingButtonConfig', { enable: true });
    fixture.componentRef.setInput('bottomSnackbarOpen', false);
    fixture.detectChanges();
    const group = fixture.debugElement.query(By.css('.lf-floating-button-group'));
    expect(group.nativeElement.classList).not.toContain('show-snackbar');
  });
});
