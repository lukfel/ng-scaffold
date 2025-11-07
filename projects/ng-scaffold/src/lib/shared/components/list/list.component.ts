import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class ListComponent implements OnChanges {

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
  public allSelected: boolean = false;

  get someSelected(): boolean {
    return this.items.length > 0 && this.items.some((item: ListItem) => item.checked) && !this.allSelected;
  }

  get hasAvatars(): boolean {
    return !!this.items?.some((item: ListItem) => (item.avatar || item.matIcon || item.svgIcon));
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.allSelected = this.items.length > 0 && this.items.every((item: ListItem) => item.checked);
    }
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
    this.allSelected = event.checked;

    this.items.forEach((item: ListItem) => {
      if (!item.disabled) item.checked = this.allSelected;
    });

    this.selectionChangeEvent.emit(this.items);
  }

  public selectItem(item: ListItem, event: MatCheckboxChange): void {
    this.allSelected = this.items.length > 0 && this.items.every((item: ListItem) => item.checked);

    item.checked = event.checked;
    this.selectionChangeEvent.emit([item]);
  }

  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.avatarFallbackPath || '';
  }
}
