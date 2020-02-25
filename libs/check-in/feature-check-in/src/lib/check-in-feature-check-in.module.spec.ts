import { async, TestBed } from '@angular/core/testing';
import { CheckInFeatureCheckInModule } from './check-in-feature-check-in.module';

describe('CheckInFeatureCheckInModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInFeatureCheckInModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInFeatureCheckInModule).toBeDefined();
  });
});
