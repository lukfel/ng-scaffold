import { Component, Input } from '@angular/core';
import { FooterConfig } from '../../models';

@Component({
    selector: 'lf-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent {

  @Input() public footerConfig: FooterConfig = {};

}
