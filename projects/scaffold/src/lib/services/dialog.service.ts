import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { HeaderInputConfig, ConfirmDialogConfig } from '../models';
import { ConfirmDialogComponent } from '../shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { InputComponent } from '../shared/components/input/input.component';

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
  public openCustomDialog(templateRef: ComponentType<any> | TemplateRef<any>, config: MatDialogConfig): Promise<boolean> {    // eslint-disable-line @typescript-eslint/no-explicit-any
    const dialogRef = this.matDialog.open(templateRef, config);
    return firstValueFrom(dialogRef.afterClosed());
  }

  /**
   * Opens a simple pre-made confirm dialog
   *
   * @param config
   * @returns an asynchronous boolean response
   */
  public openConfirmDialog(config: ConfirmDialogConfig): Promise<boolean> {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      autoFocus: false,
      maxWidth: '368px',
      data: config
    });
    return firstValueFrom(dialogRef.afterClosed());
  }

  /**
 * Opens a simple pre-made input dialog
 *
 * @param config
 * @returns an asynchronous boolean response
 */
  public openInputDialog(config: HeaderInputConfig): Promise<string | undefined> {
    const dialogRef = this.matDialog.open(InputComponent, {
      autoFocus: false,
      width: '100vw',
      data: config,
      panelClass: 'lf-input-dialog'
    });
    return firstValueFrom(dialogRef.afterClosed());
  }
}
