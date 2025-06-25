import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogConfig } from '../../../../models';

@Component({
    selector: 'lf-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    standalone: false
})
export class ConfirmDialogComponent {
  public config = inject<ConfirmDialogConfig>(MAT_DIALOG_DATA);

}
