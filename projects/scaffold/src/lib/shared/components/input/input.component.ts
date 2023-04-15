import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public label: string;
  @Input() public matIconSubmit: string;
  @Input() public matIconPrefix: string;
  @Input() public hint: string;
  @Input() public disabled: boolean = false;

  @Output() public inputSubmitEvent = new EventEmitter<string>();
  @Output() public inputChangeEvent = new EventEmitter<string>();
  @Output() public inputPrefixActionEvent = new EventEmitter<void>();

  public inputValue: string = '';

  public inputSubmitted(value: string): void {
    this.inputSubmitEvent.emit(value);
  }

  public inputChanged(value: string): void {
    this.inputChangeEvent.emit(value);
  }

  public inputPrefixAction(): void {
    this.inputPrefixActionEvent.emit();
  }

  public clearInput(): void {
    this.inputValue = '';
  }
}
