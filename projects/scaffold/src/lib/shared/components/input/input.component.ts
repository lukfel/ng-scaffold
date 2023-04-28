import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderInputConfig } from '../../../models';

@Component({
  selector: 'lf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public label: string;
  @Input() public matIconSubmit: string;
  @Input() public matIconPrefix: string;
  @Input() public hint: string;
  @Input() public disabled: boolean = false;

  @Output() public inputSubmitEvent = new EventEmitter<string>();
  @Output() public inputChangeEvent = new EventEmitter<string>();
  @Output() public inputPrefixActionEvent = new EventEmitter<void>();

  public inputValue: string = '';

  constructor(@Optional() public dialogRef: MatDialogRef<InputComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public config: HeaderInputConfig) { }

  ngOnInit(): void {
    if (this.config) {
      this.label = this.config.label || '';
      this.matIconSubmit = this.config.matIcon || '';
      this.matIconPrefix = 'arrow_back';
    }
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
