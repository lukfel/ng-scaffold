import { CommonModule } from '@angular/common';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { provideRouter } from '@angular/router';
import { ScaffoldComponent } from '@lukfel/ng-scaffold';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ScaffoldComponent,
        MatListModule,
        MatIconModule,
        MatDividerModule
      ],
      providers: [
        provideHttpClientTesting(),
        provideRouter([])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});