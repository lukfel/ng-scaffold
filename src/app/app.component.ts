import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DialogService, Logger, SnackbarService } from '@lf/scaffold';
import { ScaffoldService } from 'src/app/shared/services/scaffold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
    private logger: Logger,
    private snackbarService: SnackbarService,
    private dialogService: DialogService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public scaffoldService: ScaffoldService) {
    // Register custom svg for header logo
    this.iconRegistry.addSvgIcon('lf_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
  }

  // Listen to header click events
  public headerClickEvent(id: string): void {
    if (id === 'menu') {
      this.scaffoldService.drawerConfig.open = !this.scaffoldService.drawerConfig.open;
      this.snackbarService.openDefaultSnackbar(`You clicked the header button '${id}'`);
    } else {
      this.snackbarService.openDefaultSnackbarWithAction(`You clicked the header button  '${id}'`, 'Close').then(() => {
        this.dialogService.openConfirmDialog(`You closed the snackbar of the header button '${id}'`).then(result => {
          this.logger.log(result);
        });
      }).catch(error => {
        this.logger.log(error);
      });
    }
  }

  // Listen to header input submit events
  public headerSubmitEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to header input change events
  public headerInputEvent(value: string): void {
    this.logger.log(value);
  }

  // Listen to sidenav click events
  public sidenavClickEvent(id: string): void {
    this.router.navigate([id]);
  }

}
