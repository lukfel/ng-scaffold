import { Component, OnInit, inject } from '@angular/core';
import { Button, ListHeader, ListItem, PlaceholderConfig, ScaffoldConfig, ScaffoldService, SnackbarService } from '@lukfel/ng-scaffold';
import { take } from 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  standalone: false
})
export class ComponentsComponent implements OnInit {
  private scaffoldService = inject(ScaffoldService);
  private snackbar = inject(SnackbarService);

  // private listData = [
  //   {
  //     id: 0,
  //     name: 'Item 1',
  //     initExpDays: 6,
  //     imgUrl: '',
  //     checked: false,
  //     quantity: 'HIGH',
  //     isDefault: false
  //   },
  //   {
  //     id: 1,
  //     name: 'Item 2',
  //     initExpDays: 4,
  //     imgUrl: '',
  //     checked: false,
  //     quantity: 'HALF',
  //     isDefault: false
  //   },
  //   {
  //     id: 2,
  //     name: 'Item 3',
  //     initExpDays: 10,
  //     imgUrl: '',
  //     checked: false,
  //     quantity: 'LOW',
  //     isDefault: true
  //   }
  // ];

  public header: ListHeader = { enableSorting: true, enableSelection: true, tokens: ['Title', 'Date'] };
  public items: ListItem[] = [
    { id: 0, avatar: 'assets/img/logos/ic_launcher-web.png', title: 'Item 1' },
    { id: 1, svgIcon: 'logo', title: 'Item 2', subtitle: 'My delete action is disabled', disabledActions: ['delete'] },
    { id: 2, matIcon: 'person', title: 'Item 3', subtitle: 'My edit action is hidden', hiddenActions: ['edit'] }
  ];
  public buttons: Button[] = [
    { id: 'edit', matIcon: 'edit' },
    { id: 'delete', matIcon: 'delete' }//, color: 'warn' }
  ];

  public fileName: string = '';

  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'widgets',
    outlineIcon: true,
    heading: 'Heading',
    message: 'This is a placeholder message.',
    buttonLabel: 'ACTION'
  }

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Components';
      }
    });
  }

  public onButtonClick(event: { id: string, item: ListItem }): void {
    if (event?.id === 'edit') {
      this.snackbar.openSnackbar(`Edit ${event?.item?.title}`, 'Close');
    } else if (event?.id === 'delete') {
      this.snackbar.openSnackbar(`Delete ${event?.item?.title}`, 'Close');
    }
  }

  public onSelectionChange(items: ListItem[]): void {
    this.snackbar.openSnackbar(`Selected ${items?.length || 0} items`, 'Close');
  }

  public onFileChangeEvent(file: File): void {
    this.fileName = file.name;
  }

  public onButtonClickEvent(): void {
    this.snackbar.openSnackbar('Clicked placeholder button', 'Close');
  }
}
