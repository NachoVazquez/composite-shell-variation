import { async, TestBed } from '@angular/core/testing';
import { CheckInFeatureTicketFinderModule } from './check-in-feature-ticket-finder.module';

describe('CheckInFeatureTicketFinderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInFeatureTicketFinderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInFeatureTicketFinderModule).toBeDefined();
  });
});
