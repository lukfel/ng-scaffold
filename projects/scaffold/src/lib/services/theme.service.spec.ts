import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  // let mockDocument: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [
      //   { provide: DOCUMENT, useValue: mockDocument }
      // ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
