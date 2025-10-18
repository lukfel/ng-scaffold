import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { ConfirmDialogConfig, HeaderInputConfig } from '../models';
import { ConfirmDialogComponent } from '../shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { InputComponent } from '../shared/components/input/input.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private matDialog = inject(MatDialog);


  /**
   * Opens a dialog with custom template and custom config
   *
   * @param templateRef reference to the component or template
   * @param config of the dialog
   * @returns an asynchronous any response
   */
  public openCustomDialog(templateRef: ComponentType<any> | TemplateRef<any>, config: MatDialogConfig): Promise<any> {    // eslint-disable-line @typescript-eslint/no-explicit-any
    const dialogRef = this.matDialog.open(templateRef, config);
    return firstValueFrom(dialogRef.afterClosed());
  }

  /**
   * Opens a simple pre-made confirm dialog
   *
   * @param config of the dialog
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
   * @param config of the dialog
   * @returns an asynchronous string response
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
