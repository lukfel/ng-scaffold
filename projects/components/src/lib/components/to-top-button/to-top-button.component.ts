import { Component, Input, OnInit } from '@angular/core';
import { ToTopButtonConfig } from '../../models';

@Component({
  selector: 'lf-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent implements OnInit {

  @Input() public toTopButtonConfig: ToTopButtonConfig = {};
  @Input() public scrollElement: HTMLElement;

  public autoHide: boolean = true;

  public ngOnInit(): void {
    if(this.scrollElement) {
      this.scrollElement.addEventListener('scroll', (e: Event) => {
        const target: HTMLElement = e.target as HTMLElement;
        const scrollTop: number = target.scrollTop;
        if(scrollTop > 0) {
          this.autoHide = false;
        } else {
          this.autoHide = true;
        }
      });
    }
  }

  public backToTop(): void {
    if (this.scrollElement) {
      this.scrollElement.scrollTop = 0;
    }
  }

}
