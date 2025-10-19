import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ListAction, ListItem } from '../../../models';
import { SharedModule } from '../../shared.module';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'lf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [SharedModule, IconComponent]
})
export class ListComponent {

  @Input() public items: ListItem[] = [];
  @Input() public actions: ListAction[] = [];
  @Input() public showHeader: boolean = false;
  @Input() public headerTitle?: string;
  @Input() public enableSorting: boolean = false;
  @Input() public enableCheckboxes: boolean = false;
  @Input() public avatarFallbackPath?: string;

  @Output() public actionClick = new EventEmitter<{ id: string, item: ListItem }>();
  @Output() public selectionChange = new EventEmitter<ListItem[]>();


  get allSelected(): boolean {
    return this.items.length > 0 && this.items.every(i => i.checked);
  }

  get someSelected(): boolean {
    return this.items.some(i => i.checked) && !this.allSelected;
  }


  public toggleAll(event: MatCheckboxChange): void {
    const selected = event.checked;
    this.items.forEach(i => (i.checked = selected));
    this.emitSelection();
  }

  public toggleItem(): void {
    this.emitSelection();
  }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.avatarFallbackPath || '';
  }

  private emitSelection(): void {
    const selected = this.items.filter(i => i.checked);
    this.selectionChange.emit(selected);
  }
}
