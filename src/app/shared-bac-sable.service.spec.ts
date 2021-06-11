import { TestBed } from '@angular/core/testing';

import { SharedBacSableService } from './shared-bac-sable.service';

describe('SharedBacSableService', () => {
  let service: SharedBacSableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBacSableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
