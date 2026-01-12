import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderInputConfig } from '../../../models';

@Component({
  selector: 'lf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class InputComponent implements OnInit, AfterViewInit, OnDestroy {

  private dialogRef = inject<MatDialogRef<InputComponent>>(MatDialogRef, { optional: true });
  private config = inject<HeaderInputConfig>(MAT_DIALOG_DATA, { optional: true });
  private cd = inject(ChangeDetectorRef);


  @ViewChild('input') public input: ElementRef = null!;

  @Input() public inputConfig: HeaderInputConfig = {};
  @Input() public isMobile: boolean = false;

  @Output() public inputSubmitEvent = new EventEmitter<string>();
  @Output() public inputChangeEvent = new EventEmitter<string>();
  @Output() public inputPrefixActionEvent = new EventEmitter<void>();


  public inputValue: string = '';

  ngOnInit(): void {
    if (this.config) {
      this.inputConfig = this.config;
    }
  }

  ngAfterViewInit(): void {
    if (this.input && this.inputConfig.autoFocus) {
      this.input.nativeElement.focus();
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.inputValue = '';
    this.inputChangeEvent.emit(this.inputValue);
  }

  public inputSubmitted(value: string): void {
    this.inputSubmitEvent.emit(value);

    if (this.dialogRef) {
      this.dialogRef.close(value);
    }
  }

  public inputChanged(value: string): void {
    this.inputChangeEvent.emit(value);
  }

  public inputPrefixAction(): void {
    this.inputPrefixActionEvent.emit();

    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  public clearInput(): void {
    this.inputValue = '';
    this.inputChangeEvent.emit(this.inputValue);
  }
}
