import { Component } from '@angular/core';
import { AppHeaderConfig } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public headerConfig: AppHeaderConfig = {
    show: true,
    title: 'Titel'
  }

}
