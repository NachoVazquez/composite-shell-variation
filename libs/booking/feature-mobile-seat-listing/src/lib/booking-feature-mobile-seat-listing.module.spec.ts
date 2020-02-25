import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureMobileSeatListingModule } from './booking-feature-mobile-seat-listing.module';

describe('BookingFeatureMobileSeatListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureMobileSeatListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureMobileSeatListingModule).toBeDefined();
  });
});
