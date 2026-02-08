import { CdkDragDrop, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, inject, input, model, OnChanges, OnInit, output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListItemAvatarDirective, ListItemButtonsDirective, ListItemSubtitleDirective, ListItemTitleDirective } from '../../../directives';
import { Button, ListConfig, ListHeader, ListItem, ScaffoldLibraryConfig } from '../../../models';
import { CONFIG } from '../../../scaffold.config';

@Component({
  selector: 'lf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ]
})
export class ListComponent implements OnInit, OnChanges {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });


  public readonly avatarTemplate = contentChild(ListItemAvatarDirective);
  public readonly titleTemplate = contentChild(ListItemTitleDirective);
  public readonly subtitleTemplate = contentChild(ListItemSubtitleDirective);
  public readonly buttonsTemplate = contentChild(ListItemButtonsDirective);

  public readonly config = input<ListConfig | null>(null);
  public readonly header = input<ListHeader | null>(null);
  public readonly items = input<ListItem[]>([]);
  public readonly groupedItems = input<Map<string, ListItem[]>>(new Map());
  public readonly buttons = input<Button[]>([]);

  public readonly dropListId = input<string>();
  public readonly connectedDropListIds = input<string[]>();

  public readonly sortChangeEvent = output<{
    sortToken: string;
    sortAsc: boolean;
}>();
  public readonly selectionChangeEvent = output<ListItem[]>();
  public readonly itemClickEvent = output<ListItem>();
  public readonly itemDropEvent = output<{
    items: ListItem[];
    id: string;
}>();
  public readonly buttonClickEvent = output<{
    buttonId: string;
    item: ListItem;
}>();


  public sortToken = signal<string>('');
  public sortAsc = signal<boolean>(true);
  public allSelected = model<boolean>(false);

  get someSelected(): boolean {
    return this.items().length > 0 && this.items().some((item: ListItem) => item.checked) && !this.allSelected();
  }

  get hasAvatars(): boolean {
    return !!this.items()?.some((item: ListItem) => (item.avatar || item.matIcon || item.svgIcon));
  }


  ngOnInit(): void {
    const config = this.config();
    if (config) {
      this.sortToken.set(config.initialSortToken || '');
      this.sortAsc.set(config.initialSortAsc || false);
      this.updateSortToken(this.sortToken(), true);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.allSelected.set(this.items().length > 0 && this.items().every((item: ListItem) => item.checked));
    }
  }


  // Update the sort token
  public updateSortToken(sortToken: string | undefined, initial?: boolean): void {
    if (!sortToken) return;
    if (this.sortToken() === sortToken && !initial) this.sortAsc.set(!this.sortAsc());
    this.sortToken.set(sortToken);
    this.sortChangeEvent.emit({ sortToken: this.sortToken(), sortAsc: this.sortAsc() });
  }

  // Select all items
  public selectAll(event: MatCheckboxChange): void {
    this.allSelected.set(event.checked);

    this.items().forEach((item: ListItem) => {
      if (!item.disabled) item.checked = this.allSelected();
    });

    this.selectionChangeEvent.emit(this.items());
  }

  // Select single item
  public selectItem(item: ListItem, event: MatCheckboxChange): void {
    if (this.config()?.disableMultiselect) this.items().forEach((item: ListItem) => { item.checked = false; });
    this.allSelected.set(this.items().length > 0 && this.items().every((item: ListItem) => item.checked));
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
    return [...(item.buttons ?? []), ...(this.buttons() ?? [])];
  }

  // Handle image errors
  public onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.config()?.avatarFallbackPath || '';
  }

  // Stop click trough events
  public stopPropagation(click: Event): void {
    // click.preventDefault();
    // click.stopPropagation();
    click.stopImmediatePropagation();
  }
}
