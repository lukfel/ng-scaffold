import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { provideRouter } from '@angular/router';
import { ListItem } from '../../../models';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListComponent,
        CommonModule,
        FormsModule,
        DragDropModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRippleModule,
        MatIconModule,
        MatTooltipModule,
        MatDividerModule
      ],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect link items', () => {
    expect(component.isLink({ id: 1, title: 'Link', routerLink: '/foo' })).toBe(true);
    expect(component.isLink({ id: 2, title: 'Href', href: 'https://example.com' })).toBe(true);
    expect(component.isLink({ id: 3, title: 'Plain' })).toBe(false);
  });

  it('should render a link item as an anchor', () => {
    fixture.componentRef.setInput('items', [
      { id: 1, title: 'Link', routerLink: '/foo' },
      { id: 2, title: 'Plain' }
    ]);
    fixture.detectChanges();

    const anchors: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('a.lf-list-item-link');

    expect(anchors.length).toBe(1);
    expect(anchors[0].getAttribute('href')).toBe('/foo');
  });

  it('should not emit itemClickEvent for a link item', () => {
    const clicked: ListItem[] = [];
    component.itemClickEvent.subscribe((item: ListItem) => clicked.push(item));

    fixture.componentRef.setInput('items', [
      { id: 1, title: 'Link', routerLink: '/foo', clickable: true }
    ]);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.lf-list-item-data').click();

    expect(clicked.length).toBe(0);
  });
});
