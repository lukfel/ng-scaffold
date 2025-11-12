import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ListItemAvatarDirective, ListItemButtonsDirective, ListItemSubtitleDirective, ListItemTitleDirective } from '../../../directives';
import { Button, ListConfig, ListHeader, ListItem } from '../../../models';
import { SharedModule } from '../../shared.module';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'lf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [SharedModule, IconComponent]
})
export class ListComponent implements OnInit, OnChanges {

  @ContentChild(ListItemAvatarDirective) public avatarTemplate?: ListItemAvatarDirective;
  @ContentChild(ListItemTitleDirective) public titleTemplate?: ListItemTitleDirective;
  @ContentChild(ListItemSubtitleDirective) public subtitleTemplate?: ListItemSubtitleDirective;
  @ContentChild(ListItemButtonsDirective) public buttonsTemplate?: ListItemButtonsDirective;

  @Input() public config: ListConfig | null = null;
  @Input() public header: ListHeader | null = null;
  @Input() public items: ListItem[] = [];
  @Input() public groupedItems: Map<string, ListItem[]> = new Map();
  @Input() public buttons: Button[] = [];

  @Input() public dropListId: string;
  @Input() public connectedDropListIds: string[];

  @Output() public sortChangeEvent = new EventEmitter<{ sortToken: string, sortAsc: boolean }>();
  @Output() public selectionChangeEvent = new EventEmitter<ListItem[]>();
  @Output() public itemClickEvent = new EventEmitter<ListItem>();
  @Output() public itemDropEvent = new EventEmitter<{ items: ListItem[], id: string }>();
  @Output() public buttonClickEvent = new EventEmitter<{ buttonId: string, item: ListItem }>();


  public sortToken: string;
  public sortAsc: boolean = true;
  public allSelected: boolean = false;

  get someSelected(): boolean {
    return this.items.length > 0 && this.items.some((item: ListItem) => item.checked) && !this.allSelected;
  }

  get hasAvatars(): boolean {
    return !!this.items?.some((item: ListItem) => (item.avatar || item.matIcon || item.svgIcon));
  }


  ngOnInit(): void {
    if (this.config) {
      this.sortToken = this.config.initialSortToken || '';
      this.sortAsc = this.config.initialSortAsc || false;
      this.updateSortToken(this.sortToken, true);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.allSelected = this.items.length > 0 && this.items.every((item: ListItem) => item.checked);
    }
  }


  // Update the sort token
  public updateSortToken(sortToken: string | undefined, initial?: boolean): void {
    if (!sortToken) return;
    if (this.sortToken === sortToken && !initial) this.sortAsc = !this.sortAsc;
    this.sortToken = sortToken;
    this.sortChangeEvent.emit({ sortToken: this.sortToken, sortAsc: this.sortAsc });
  }

  // Select all items
  public selectAll(event: MatCheckboxChange): void {
    this.allSelected = event.checked;

    this.items.forEach((item: ListItem) => {
      if (!item.disabled) item.checked = this.allSelected;
    });

    this.selectionChangeEvent.emit(this.items);
  }

  // Select single item
  public selectItem(item: ListItem, event: MatCheckboxChange): void {
    this.allSelected = this.items.length > 0 && this.items.every((item: ListItem) => item.checked);
    item.checked = event.checked;
    this.selectionChangeEvent.emit([item]);
  }

  // Handle item click events
  public clickItem(item: ListItem, click: Event): void {
    this.stopPropagation(click);
    this.itemClickEvent.emit(item)
  }

  // Handle item drop events
  public dropItem(event: CdkDragDrop<ListItem[]>, id: string): void {
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.itemDropEvent.emit({ items: event.container.data, id });
  }

  // Handle button click events
  public clickButton(event: { buttonId: string, item: ListItem }, click: Event): void {
    this.stopPropagation(click);
    this.buttonClickEvent.emit(event);
  }

  // Combine list and item buttons
  public getCombinedButtons(item: ListItem): Button[] {
    return [...(item.buttons ?? []), ...(this.buttons ?? [])];
  }

  // Handle image errors
  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.config?.avatarFallbackPath || '';
  }

  // Stop click trough events
  public stopPropagation(click: Event): void {
    // click.preventDefault();
    // click.stopPropagation();
    click.stopImmediatePropagation();
  }
}
