import { Component } from '@angular/core';
import { ScaffoldService } from 'src/app/shared/services/scaffold.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  constructor(public scaffoldService: ScaffoldService) {}

  public showContainerLoading(): void {
    this.scaffoldService.containerConfig.loading = true;

    setTimeout(() => {
      this.scaffoldService.containerConfig.loading = false;
    }, 3000);
  }

  public imgLogoChange(event: string): void {
    if(event) {
      this.scaffoldService.headerConfig.svgLogo = '';
    } else {
      this.scaffoldService.headerConfig.svgLogo = 'lf_logo'
    }
  }

}
