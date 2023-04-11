import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { SimpleDialogComponent } from '../components/dialogs/simple-dialog/simple-dialog.component';
import { SimpleDialogConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  /**
   * Opens a dialog with custom template and custom config
   *
   * @param templateRef
   * @param config
   * @returns an asynchronous boolean response
   */
  public openCustomDialog(templateRef: TemplateRef<any>, config: MatDialogConfig): Promise<boolean> {
    const dialogRef = this.matDialog.open(templateRef, config);
    return firstValueFrom(dialogRef.afterClosed());
  }

  /**
   * Opens a simple pre-made dialog
   *
   * @param config
   * @returns an asynchronous boolean response
   */
  public openSimpleDialog(config: SimpleDialogConfig): Promise<boolean> {
    const dialogRef = this.matDialog.open(SimpleDialogComponent, {
      autoFocus: false,
      maxWidth: '368px',
      data: config
    });
    return firstValueFrom(dialogRef.afterClosed());
  }
}
