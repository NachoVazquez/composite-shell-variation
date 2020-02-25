import { async, TestBed } from '@angular/core/testing';
import { BookingShellMobileModule } from './booking-shell-mobile.module';

describe('BookingShellMobileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingShellMobileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingShellMobileModule).toBeDefined();
  });
});
