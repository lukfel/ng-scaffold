import { Component, Input } from '@angular/core';
import { FooterConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public footerConfig: FooterConfig | null = null;

}
