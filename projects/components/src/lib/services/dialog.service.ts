import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  public openDialog(templateRef: TemplateRef<unknown>, data?: any): Promise<boolean> {
    const dialogRef = this.matDialog.open(templateRef, {
      // autoFocus: false,
      // maxWidth: '368px',
      data
    });
    return firstValueFrom(dialogRef.afterClosed());
  }
}
