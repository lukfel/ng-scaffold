import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DrawerComponent,
        CommonModule,
        MatSidenavModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the drawer if the config is enabled', () => {
    fixture.componentRef.setInput('drawerConfig', {
      enable: true
    });
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    expect(drawer).toBeTruthy();
  });

  it('should not show the drawer if the config is disabled', () => {
    fixture.componentRef.setInput('drawerConfig', {
      enable: false
    });
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    expect(drawer).toBeFalsy();
  });

  it('should call onDrawerClosed method when the drawer is closed', () => {
    spyOn(component, 'drawerClosed');
    fixture.componentRef.setInput('drawerConfig', {
      enable: true
    });
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    drawer.nativeElement.dispatchEvent(new Event('closed'));
    expect(component.drawerClosed).toHaveBeenCalled();
  });
});
