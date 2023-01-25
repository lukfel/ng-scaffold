import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  // Opens a dialog with custom template and custom config
  public openCustomDialog(templateRef: TemplateRef<any>, config: MatDialogConfig): Promise<boolean> {
    const dialogRef = this.matDialog.open(templateRef, config);
    return firstValueFrom(dialogRef.afterClosed());
  }

  // Opens a pre-made confirm dialog
  public openConfirmDialog(title: string, hint?: string): Promise<boolean> {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      autoFocus: false,
      maxWidth: '368px',
      data: { title, hint }
    });
    return firstValueFrom(dialogRef.afterClosed());
  }
}
