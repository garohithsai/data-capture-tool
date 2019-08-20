import { TestBed } from '@angular/core/testing';

import { ErrorBroadcastService } from './error-broadcast.service';

describe('ErrorBroadcastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorBroadcastService = TestBed.get(ErrorBroadcastService);
    expect(service).toBeTruthy();
  });
});
