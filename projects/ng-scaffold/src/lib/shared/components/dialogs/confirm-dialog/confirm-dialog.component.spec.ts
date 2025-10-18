import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared.module';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      imports: [SharedModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title if provided', () => {
    component.config = { title: 'Test Title' };
    fixture.detectChanges();
    const titleEl = fixture.debugElement.query(By.css('h2'));
    expect(titleEl.nativeElement.textContent.trim()).toEqual('Test Title');
  });

  it('should not display the title if not provided', () => {
    component.config = {};
    fixture.detectChanges();
    const titleEl = fixture.debugElement.query(By.css('h2'));
    expect(titleEl).toBeFalsy();
  });

  it('should display the message if provided', () => {
    component.config = { message: 'Test Message' };
    fixture.detectChanges();
    const messageEl = fixture.debugElement.query(By.css('mat-dialog-content p'));
    expect(messageEl.nativeElement.textContent.trim()).toEqual('Test Message');
  });

  it('should not display the message if not provided', () => {
    component.config = {};
    fixture.detectChanges();
    const messageEl = fixture.debugElement.query(By.css('mat-dialog-content p'));
    expect(messageEl).toBeFalsy();
  });

  it('should display the close button label if provided', () => {
    component.config = { closeLabel: 'Close' };
    fixture.detectChanges();
    const closeButtonEl = fixture.debugElement.query(By.css('mat-dialog-actions button:first-child'));
    expect(closeButtonEl.nativeElement.textContent.trim()).toEqual('Close');
  });

  it('should not display the close button if not provided', () => {
    component.config = {};
    fixture.detectChanges();
    const closeButtonEl = fixture.debugElement.query(By.css('mat-dialog-actions button:first-child'));
    expect(closeButtonEl).toBeFalsy();
  });

  it('should display the confirm button label if provided', () => {
    component.config = { confirmLabel: 'Confirm' };
    fixture.detectChanges();
    const confirmButtonEl = fixture.debugElement.query(By.css('mat-dialog-actions button:last-child'));
    expect(confirmButtonEl.nativeElement.textContent.trim()).toEqual('Confirm');
  });

  it('should not display the confirm button if not provided', () => {
    component.config = {};
    fixture.detectChanges();
    const confirmButtonEl = fixture.debugElement.query(By.css('mat-dialog-actions button:last-child'));
    expect(confirmButtonEl).toBeFalsy();
  });
});
