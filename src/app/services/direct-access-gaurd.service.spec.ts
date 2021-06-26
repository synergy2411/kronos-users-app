import { TestBed } from '@angular/core/testing';

import { DirectAccessGaurdService } from './direct-access-gaurd.service';

describe('DirectAccessGaurdService', () => {
  let service: DirectAccessGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectAccessGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
