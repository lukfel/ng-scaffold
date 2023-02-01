import { Component } from '@angular/core';
import { ScaffoldService } from 'src/app/shared/services/scaffold.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  constructor(public scaffoldService: ScaffoldService) {}

}
