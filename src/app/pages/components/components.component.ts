import { Component, OnInit, inject } from '@angular/core';
import { ListAction, ListItem, PlaceholderConfig, ScaffoldConfig, ScaffoldService, SnackbarService } from '@lukfel/ng-scaffold';
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


  public items: ListItem[] = [
    { title: 'Item 1' },
    { title: 'Item 2', subtitle: 'My delete action is disabled', disabledActions: ['delete'] },
    { title: 'Item 3', subtitle: 'My edit action is hidden', hiddenActions: ['edit'] }
  ];
  public actions: ListAction[] = [
    { id: 'edit', matIcon: 'edit' },
    { id: 'delete', matIcon: 'delete', color: 'warn' }
  ];

  public fileName: string = '';

  public placeholderConfig: PlaceholderConfig = {
    matIcon: 'widgets',
    outlineIcon: true,
    heading: 'Heading',
    message: 'This is a placeholder message.',
    actionLabel: 'ACTION'
  }

  ngOnInit(): void {
    this.scaffoldService.scaffoldConfig$.pipe(take(1)).subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (scaffoldConfig.contentTitleCardConfig) {
        scaffoldConfig.contentTitleCardConfig.label = 'Components';
      }
    });
  }

  public onActionClick(event: { id: string, item: ListItem }): void {
    if (event?.id === 'edit') {
      this.snackbar.openSnackbar(`Edit ${event?.item?.title}`);
    } else if (event?.id === 'delete') {
      this.snackbar.openSnackbar(`Delete ${event?.item?.title}`);
    }
  }

  public onSelectionChange(items: ListItem[]): void {
    this.snackbar.openSnackbar(`Selected ${items?.length || 0} items`);
  }

  public uploadFile(file: File): void {
    this.fileName = file.name;
  }
}
