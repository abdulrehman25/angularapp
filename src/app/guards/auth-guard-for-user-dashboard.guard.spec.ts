import { TestBed } from '@angular/core/testing';

import { AuthGuardForUserDashboardGuard } from './auth-guard-for-user-dashboard.guard';

describe('AuthGuardForUserDashboardGuard', () => {
  let guard: AuthGuardForUserDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardForUserDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
