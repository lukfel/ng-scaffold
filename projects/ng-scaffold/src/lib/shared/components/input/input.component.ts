import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, effect, inject, input, model, output, viewChild } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class InputComponent implements OnDestroy {

  private dialogRef = inject<MatDialogRef<InputComponent>>(MatDialogRef, { optional: true });
  private inputConfigDialog = inject<HeaderInputConfig>(MAT_DIALOG_DATA, { optional: true });


  public readonly input = viewChild<ElementRef>('input');

  public readonly inputConfig = input<HeaderInputConfig | null>(null);
  public readonly isMobile = input<boolean>(false);

  public readonly inputSubmitEvent = output<string>();
  public readonly inputChangeEvent = output<string>();
  public readonly inputPrefixActionEvent = output<void>();

  public inputConfigComputed = computed<HeaderInputConfig>(() => this.inputConfigDialog ?? this.inputConfig() ?? {})

  public inputValue = model<string>('');


  constructor() {
    effect(() => {
      const input = this.input();
      if (input && this.inputConfigComputed().autoFocus) {
        input.nativeElement.focus();
      }
    });
  }

  ngOnDestroy(): void {
    this.inputValue.set('');
    this.inputChangeEvent.emit(this.inputValue());
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
    this.inputValue.set('');
    this.inputChangeEvent.emit(this.inputValue());
  }
}
