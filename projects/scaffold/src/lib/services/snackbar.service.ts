import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

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

  // Opens a snackbar with an action to wait for
  public openDefaultSnackbarWithAction(message: string, action: string): Promise<void> {
    const snackbarRef = this.snackbar.open(message, action, this.actionConfig);
    return firstValueFrom(snackbarRef.onAction());
  }

  // Opens a generic snackbar with a message
  public openDefaultSnackbar(message: string, action?: string): void {
    this.snackbar.open(message, action, this.defaultConfig);
  }

}
