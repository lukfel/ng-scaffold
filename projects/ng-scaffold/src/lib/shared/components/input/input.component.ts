import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  viewChild,
} from '@angular/core';
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
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class InputComponent {
  private dialogRef = inject<MatDialogRef<InputComponent>>(MatDialogRef, { optional: true });
  private inputConfigDialog = inject<HeaderInputConfig>(MAT_DIALOG_DATA, { optional: true });
  private destroyRef = inject(DestroyRef);

  public readonly input = viewChild<ElementRef>('input');

  public readonly inputConfig = input<HeaderInputConfig | null>(null);
  public readonly isMobile = input<boolean>(false);

  public readonly inputSubmitEvent = output<string>();
  public readonly inputChangeEvent = output<string>();
  public readonly inputPrefixActionEvent = output<void>();

  public inputConfigComputed = computed<HeaderInputConfig>(
    () => this.inputConfigDialog ?? this.inputConfig() ?? {},
  );

  public inputValue = model<string>('');

  constructor() {
    effect(() => {
      const input: ElementRef | undefined = this.input();
      if (input && this.inputConfigComputed().autoFocus) {
        input.nativeElement.focus();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.inputValue.set('');
    });
  }

  public inputSubmitted(value: string): void {
    if (!this.destroyRef.destroyed) {
      this.inputSubmitEvent.emit(value);
    }

    if (this.dialogRef) {
      this.dialogRef.close(value);
    }
  }

  public inputChanged(value: string): void {
    if (!this.destroyRef.destroyed) {
      this.inputChangeEvent.emit(value);
    }
  }

  public inputPrefixAction(): void {
    if (!this.destroyRef.destroyed) {
      this.inputPrefixActionEvent.emit();
    }

    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  public clearInput(): void {
    this.inputValue.set('');

    if (!this.destroyRef.destroyed) {
      this.inputChangeEvent.emit(this.inputValue());
    }
  }
}
