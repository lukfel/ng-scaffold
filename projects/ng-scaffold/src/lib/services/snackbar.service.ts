import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbar = inject(MatSnackBar);

  private readonly SNACKBAR_DURATION: number = 5000;
  private readonly SNACKBAR_POSITION_HORIZONTAL: MatSnackBarHorizontalPosition = 'center';
  private readonly SNACKBAR_POSITION_VERTICAL: MatSnackBarVerticalPosition = 'bottom';

  private readonly actionConfig: MatSnackBarConfig = {
    duration: this.SNACKBAR_DURATION,
    horizontalPosition: this.SNACKBAR_POSITION_HORIZONTAL,
    verticalPosition: this.SNACKBAR_POSITION_VERTICAL,
  };

  private readonly defaultConfig: MatSnackBarConfig = {
    duration: this.SNACKBAR_DURATION / 2,
    horizontalPosition: this.SNACKBAR_POSITION_HORIZONTAL,
    verticalPosition: this.SNACKBAR_POSITION_VERTICAL,
  };

  private readonly bottomOpenCount = signal<number>(0);
  public readonly bottomSnackbarOpen: Signal<boolean> = computed(() => this.bottomOpenCount() > 0);

  // Opens a generic snackbar with a message
  public openSnackbar(message: string, closeLabel?: string, config?: MatSnackBarConfig): void {
    const snackbarConfig: MatSnackBarConfig = config ? config : this.defaultConfig;
    this.track(this.snackbar.open(message, closeLabel, snackbarConfig), snackbarConfig);
  }

  // Opens a snackbar with an action to wait for
  public openSnackbarWithAction(
    message: string,
    action: string,
    config?: MatSnackBarConfig,
  ): Promise<void> {
    const snackbarConfig: MatSnackBarConfig = config ? config : this.actionConfig;
    const snackbarRef = this.snackbar.open(message, action, snackbarConfig);
    this.track(snackbarRef, snackbarConfig);
    return firstValueFrom(snackbarRef.onAction());
  }

  private track(snackbarRef: MatSnackBarRef<TextOnlySnackBar>, config: MatSnackBarConfig): void {
    // MatSnackBarConfig itself defaults to 'bottom', so an unset position is a bottom one
    if ((config.verticalPosition ?? 'bottom') !== 'bottom') return;

    this.bottomOpenCount.update((count: number) => count + 1);
    // afterDismissed completes once the snackbar is gone, so there is nothing to unsubscribe
    snackbarRef
      .afterDismissed()
      .subscribe(() => this.bottomOpenCount.update((count: number) => Math.max(0, count - 1)));
  }
}
