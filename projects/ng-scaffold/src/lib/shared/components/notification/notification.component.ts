import { BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { NotificationConfig } from '../../../models';
import { BreakpointService } from '../../../services';

@Component({
  selector: 'lf-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, NgClass],
})
export class NotificationComponent {
  private breakpointService = inject(BreakpointService);

  public readonly notificationConfig = input<NotificationConfig>();

  public readonly buttonClickEvent = output<void>();

  public isMobile = toSignal(
    this.breakpointService.breakpoint$.pipe(
      map((state: BreakpointState) => state.breakpoints[Breakpoints.XSmall]),
    ),
  );
}
