import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SimpleDialogConfig } from '../../../../models';

@Component({
  selector: 'lf-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public config: SimpleDialogConfig) { }
}
