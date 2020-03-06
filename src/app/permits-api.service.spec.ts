import { TestBed } from '@angular/core/testing';

import { PermitsAPIService } from './permits-api.service';

describe('PermitsAPIService', () => {
  let service: PermitsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermitsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
