import { BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, computed, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, UrlTree } from '@angular/router';
import { map } from 'rxjs';
import { NotificationConfig } from '../../../models';
import { BreakpointService } from '../../../services';

@Component({
  selector: 'lf-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgClass,
    RouterLink,
  ],
})
export class NotificationComponent {
  private breakpointService = inject(BreakpointService);
  private router = inject(Router);

  public readonly notificationConfig = input<NotificationConfig>();

  public readonly buttonClickEvent = output<void>();
  public readonly closeClickEvent = output<void>();

  // Parsed, so a fragment or query in the string survives instead of being encoded into the path
  public routerLinkTree = computed<UrlTree | null>(() => {
    const routerLink: string | undefined = this.notificationConfig()?.routerLink;
    return routerLink ? this.router.parseUrl(routerLink) : null;
  });

  public isMobile = toSignal(
    this.breakpointService.breakpoint$.pipe(
      map((state: BreakpointState) => state.breakpoints[Breakpoints.XSmall]),
    ),
  );
}
