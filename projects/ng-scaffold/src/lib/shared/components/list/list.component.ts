import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Button, ListHeader, ListItem } from '../../../models';
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

  @Input() public header: ListHeader | null = null;
  @Input() public items: ListItem[] = [];
  @Input() public buttons: Button[] = [];
  @Input() public avatarFallbackPath: string;
  @Input() public showDividers: boolean = false;

  @Output() public sortChangeEvent = new EventEmitter<{ sortToken: string, sortAsc: boolean }>();
  @Output() public selectionChangeEvent = new EventEmitter<ListItem[]>();
  @Output() public itemClickEvent = new EventEmitter<ListItem>();
  @Output() public buttonClickEvent = new EventEmitter<{ buttonId: string, item: ListItem }>();


  public sortToken: string;
  public sortAsc: boolean = false;


  get hasAvatars(): boolean {
    return !!this.items?.some((item: ListItem) => item.avatar);
  }

  get allSelected(): boolean {
    return this.items.length > 0 && this.items.every((item: ListItem) => item.checked);
  }

  get someSelected(): boolean {
    return this.items.length > 0 && this.items.some((item: ListItem) => item.checked) && !this.allSelected;
  }


  public getCombinedActions(item: ListItem): Button[] {
    return [...(item.buttons ?? []), ...(this.buttons ?? [])];
  }

  public updateSortToken(sortToken: string | undefined): void {
    if (!sortToken) return;
    if (this.sortToken === sortToken) this.sortAsc = !this.sortAsc;
    this.sortToken = sortToken;
    this.sortChangeEvent.emit({ sortToken: this.sortToken, sortAsc: this.sortAsc });
  }

  public selectAll(event: MatCheckboxChange): void {
    // this.items.filter((item: ListItem) => !item.disabled).forEach((item: ListItem) => (item.checked = event.checked));

    this.items.forEach((item: ListItem) => {
      if (!item.disabled) item.checked = event.checked;
    });

    this.emitSelection();
  }

  public selectItem(): void {
    this.emitSelection();
  }

  private emitSelection(): void {
    const selected = this.items.filter((item: ListItem) => item.checked);
    this.selectionChangeEvent.emit(selected);
  }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.avatarFallbackPath || '';
  }
}
