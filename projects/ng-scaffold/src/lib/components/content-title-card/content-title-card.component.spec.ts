import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { ContentTitleCardComponent } from './content-title-card.component';

describe('ContentTitleCardComponent', () => {
  let component: ContentTitleCardComponent;
  let fixture: ComponentFixture<ContentTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContentTitleCardComponent,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the card if the config is enabled', () => {
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: true,
      label: 'Test Title'
    };
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('.lf-content-title-card'));
    expect(card).toBeTruthy();
  });

  it('should not show the card if the config is disabled', () => {
    component.contentTitleCardConfig = {
      enable: false,
      showBackButton: true,
      label: 'Test Title'
    };
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('.lf-content-title-card'));
    expect(card).toBeFalsy();
  });

  it('should show the back button if the config is enabled and there is route history', () => {
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: true,
      label: 'Test Title'
    };
    component.routeHistory = ['/route1', '/route2'];
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('button'));
    expect(backButton).toBeTruthy();
  });

  it('should not show the back button if the config is disabled', () => {
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: false,
      label: 'Test Title'
    };
    component.routeHistory = ['/route'];
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('button'));
    expect(backButton).toBeFalsy();
  });

  it('should not show the back button if there is no route history', () => {
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: true,
      label: 'Test Title'
    };
    component.routeHistory = [];
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('button'));
    expect(backButton).toBeFalsy();
  });

  it('should call backButtonClicked when back button is clicked', () => {
    spyOn(component, 'backButtonClicked');
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: true,
      label: 'Test Title'
    };
    component.routeHistory = ['/route1', '/route2'];
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('button'));
    backButton.triggerEventHandler('click', null);
    expect(component.backButtonClicked).toHaveBeenCalled();
  });

  it('should display the label in the component', () => {
    component.contentTitleCardConfig = {
      enable: true,
      showBackButton: false,
      label: 'Test Title'
    };
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('.lf-content-title-card-label'));
    expect(labelElement.nativeElement.textContent.trim()).toEqual('Test Title');
  });
});
