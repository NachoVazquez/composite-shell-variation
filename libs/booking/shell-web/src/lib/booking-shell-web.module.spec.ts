import { async, TestBed } from '@angular/core/testing';
import { BookingShellWebModule } from './booking-shell-web.module';

describe('BookingShellWebModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingShellWebModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingShellWebModule).toBeDefined();
  });
});
