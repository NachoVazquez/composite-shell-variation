import { async, TestBed } from '@angular/core/testing';
import { CheckInShellMobileModule } from './check-in-shell-mobile.module';

describe('CheckInShellMobileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInShellMobileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInShellMobileModule).toBeDefined();
  });
});
