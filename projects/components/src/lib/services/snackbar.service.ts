import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private readonly SNACKBAR_DURATION: number = 5000;
  private readonly SNACKBAR_POSITION_HORIZONTAL: MatSnackBarHorizontalPosition = 'center';
  private readonly SNACKBAR_POSITION_VERTICAL: MatSnackBarVerticalPosition = 'bottom';

  private readonly actionConfig: MatSnackBarConfig = {
    horizontalPosition: this.SNACKBAR_POSITION_HORIZONTAL,
    verticalPosition: this.SNACKBAR_POSITION_VERTICAL
  };

  private readonly defaultConfig: MatSnackBarConfig = {
    duration: this.SNACKBAR_DURATION,
    horizontalPosition: this.SNACKBAR_POSITION_HORIZONTAL,
    verticalPosition: this.SNACKBAR_POSITION_VERTICAL
  };

  constructor(private snackbar: MatSnackBar) { }

  public openDefaultSnackbarWithAction(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackbar.open(message, action, this.actionConfig);
  }

  public openDefaultSnackbar(message: string, action?: string): void {
    this.snackbar.open(message, action, this.defaultConfig);
  }

}
