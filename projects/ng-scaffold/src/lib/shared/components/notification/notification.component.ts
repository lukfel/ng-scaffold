import { BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';
import { BreakpointService } from '../../../services';

@Component({
  selector: 'lf-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class NotificationComponent {

  private breakpointService = inject(BreakpointService);


  public readonly color = input<'primary' | 'accent' | 'warn'>('primary');
  public readonly message = input<string>('');
  public readonly link = input<string>('');
  public readonly linkText = input<string>('');
  public readonly action = input<string>('');
  public readonly matIcon = input<string>('');
  public readonly svgIcon = input<string>('');
  public readonly static = input<boolean>(false);
  public readonly minimal = input<boolean>(false);
  public readonly cssClass = input<string>('');

  public readonly clickEvent = output();

  public isMobile = toSignal(this.breakpointService.breakpoint$.pipe(map((state: BreakpointState) => state.breakpoints[Breakpoints.XSmall])));
}
