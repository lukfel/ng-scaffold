import { Component, OnInit, inject } from '@angular/core';
import { BottomBarConfig, Button, ListHeader, ListItem, PlaceholderConfig, ScaffoldConfig, ScaffoldService, SnackbarService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  standalone: false
})
export class ComponentsComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);
  private snackbarService = inject(SnackbarService);


  public header: ListHeader = {
    matIcon: 'sort',
    enableSelection: true,
    items: [
      { title: 'Items', sortToken: 'items' }
    ]
  };

  public items: ListItem[] = [
    { id: 0, avatar: 'assets/img/logos/ic_launcher-web.png', title: 'Item 1', subtitle: 'I am clickable', clickable: true },
    { id: 1, svgIcon: 'logo', title: 'Item 2', subtitle: 'I am disabled', disabled: true },
    { id: 2, matIcon: 'person', title: 'Item 3', subtitle: 'I have no edit buton', hiddenButtonIds: ['edit'] },
  ];

  public buttons: Button[] = [
    { id: 'edit', matIcon: 'edit' },
    { id: 'delete', matIcon: 'delete', cssClass: 'lf-ugly-orange' }
  ];

  public fileName: string = '';

  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'widgets',
    title: 'Title',
    message: 'This is a placeholder message.',
    button: {
      id: 'placeholder',
      label: 'ACTION'
    }
  }

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Components';
      }
    });

    this.scaffoldService.buttonClickEventValue$.subscribe((buttonClickEventValue: string) => {
      if (buttonClickEventValue === 'bottombar_close') {
        this.items = this.items.map((item: ListItem) => ({ ...item, checked: false }));
        this.onListSelectionChange();
      }
    });
  }

  public onListSortChange(event: { sortToken: string, sortAsc: boolean }): void {
    this.items.sort((a, b) => {
      if (!a.title || !b.title) return 0;
      if (event.sortAsc) return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
  }

  public onListSelectionChange(): void {
    const checkedItems: ListItem[] = this.items.filter((item: ListItem) => item.checked);

    const bottomBarConfig: BottomBarConfig = {
      enable: checkedItems?.length > 0,
      message: `Selected: ${checkedItems?.length || 0}`,
      closeButtonId: 'bottombar_close'
    }

    this.scaffoldService.updateScaffoldProperty('bottomBarConfig', bottomBarConfig);
  }

  public onListButtonClick(event: { buttonId: string, item: ListItem }): void {
    if (event?.buttonId === 'edit') {
      this.snackbarService.openSnackbar(`Edit ${event?.item?.title}`, 'Close');
    } else if (event?.buttonId === 'delete') {
      this.snackbarService.openSnackbar(`Delete ${event?.item?.title}`, 'Close');
    }
  }

  public onListItemClick(item: ListItem): void {
    this.snackbarService.openSnackbar(`Click ${item?.title}`, 'Close');
  }

  public onFileChange(file: File): void {
    this.fileName = file.name;
  }

  public onPlaceholderButtonClick(): void {
    this.snackbarService.openSnackbar('Clicked placeholder button', 'Close');
  }
}
