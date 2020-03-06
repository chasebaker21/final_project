import { TestBed } from '@angular/core/testing';

import { MJAPIService } from './mjapi.service';

describe('MJAPIService', () => {
  let service: MJAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MJAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
