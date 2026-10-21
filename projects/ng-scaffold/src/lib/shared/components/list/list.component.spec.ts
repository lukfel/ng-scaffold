import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
        MatMenuModule,
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

  it('should open a menu for a button that has menuButtons', () => {
    fixture.componentRef.setInput('items', [{ id: 1, title: 'Item' }]);
    fixture.componentRef.setInput('buttons', [
      {
        id: 'more',
        matIcon: 'more_vert',
        menuButtons: [
          { id: 'edit', matIcon: 'edit', label: 'Edit' },
          { id: 'delete', matIcon: 'delete', label: 'Delete' }
        ]
      }
    ]);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.lf-list-item-icon').click();
    fixture.detectChanges();

    expect(document.querySelectorAll('.mat-mdc-menu-item').length).toBe(2);
  });

  it('should emit buttonClickEvent with the id of the clicked menu button', () => {
    const clicked: string[] = [];
    component.buttonClickEvent.subscribe((event: { buttonId: string; item: ListItem }) =>
      clicked.push(event.buttonId)
    );

    fixture.componentRef.setInput('items', [{ id: 1, title: 'Item' }]);
    fixture.componentRef.setInput('buttons', [
      { id: 'more', matIcon: 'more_vert', menuButtons: [{ id: 'edit', label: 'Edit' }] }
    ]);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.lf-list-item-icon').click();
    fixture.detectChanges();
    (document.querySelector('.mat-mdc-menu-item') as HTMLElement).click();
    fixture.detectChanges();

    expect(clicked).toContain('edit');
  });

  // Each button instantiates the template, so two menus must not share one trigger
  it('should give every button its own menu', () => {
    fixture.componentRef.setInput('items', [{ id: 1, title: 'Item' }]);
    fixture.componentRef.setInput('buttons', [
      { id: 'a', matIcon: 'edit', menuButtons: [{ id: 'a1', label: 'A1' }] },
      { id: 'b', matIcon: 'delete', menuButtons: [{ id: 'b1', label: 'B1' }, { id: 'b2', label: 'B2' }] }
    ]);
    fixture.detectChanges();

    const triggers = fixture.nativeElement.querySelectorAll('.lf-list-item-icon');
    (triggers[1] as HTMLElement).click();
    fixture.detectChanges();

    const labels = Array.from(document.querySelectorAll('.mat-mdc-menu-item')).map(
      (entry: Element) => entry.textContent?.trim()
    );
    expect(labels).toEqual(['B1', 'B2']);
  });

  it('should leave a button without menuButtons as a plain button', () => {
    fixture.componentRef.setInput('items', [{ id: 1, title: 'Item' }]);
    fixture.componentRef.setInput('buttons', [{ id: 'plain', matIcon: 'edit' }]);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.lf-list-item-icon').click();
    fixture.detectChanges();

    expect(document.querySelectorAll('.mat-mdc-menu-item').length).toBe(0);
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
