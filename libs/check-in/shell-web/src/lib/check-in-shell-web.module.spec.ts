import { async, TestBed } from '@angular/core/testing';
import { CheckInShellWebModule } from './check-in-shell-web.module';

describe('CheckInShellWebModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInShellWebModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInShellWebModule).toBeDefined();
  });
});
