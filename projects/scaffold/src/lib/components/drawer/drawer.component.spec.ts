import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerComponent],
      imports: [SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the drawer if the config is enabled', () => {
    component.drawerConfig = {
      enable: true
    };
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    expect(drawer).toBeTruthy();
  });

  it('should not show the drawer if the config is disabled', () => {
    component.drawerConfig = {
      enable: false
    };
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    expect(drawer).toBeFalsy();
  });

  it('should call onDrawerClosed method when the drawer is closed', () => {
    spyOn(component, 'onDrawerClosed');
    component.drawerConfig = { enable: true };
    fixture.detectChanges();
    const drawer = fixture.debugElement.query(By.css('.lf-drawer'));
    drawer.nativeElement.dispatchEvent(new Event('closed'));
    expect(component.onDrawerClosed).toHaveBeenCalled();
  });
});
