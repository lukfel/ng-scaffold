import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogConfig } from '../../../../models';

@Component({
  selector: 'lf-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class ConfirmDialogComponent {
  
   public configData = inject<ConfirmDialogConfig>(MAT_DIALOG_DATA);
   public config = signal<ConfirmDialogConfig>(this.configData);

}
