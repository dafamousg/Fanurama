import { TestBed } from '@angular/core/testing';

import { FuturamaAPIService } from './futurama-api.service';

describe('FuturamaAPIService', () => {
  let service: FuturamaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuturamaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
