import { async, TestBed } from '@angular/core/testing';
import { SharedUtilsTranslocoConfigModule } from './shared-utils-transloco-config.module';

describe('SharedUtilsTranslocoConfigModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilsTranslocoConfigModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilsTranslocoConfigModule).toBeDefined();
  });
});
