import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureSeatListingModule } from './booking-feature-seat-listing.module';

describe('BookingFeatureSeatListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureSeatListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureSeatListingModule).toBeDefined();
  });
});
