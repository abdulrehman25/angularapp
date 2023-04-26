import { TestBed } from '@angular/core/testing';

import { AdminRoutesGuardGuard } from './admin-routes-guard.guard';

describe('AdminRoutesGuardGuard', () => {
  let guard: AdminRoutesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRoutesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
