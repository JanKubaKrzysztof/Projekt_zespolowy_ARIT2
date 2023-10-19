import { TestBed } from '@angular/core/testing';

import { FakeShopHttpRequestService } from './fake-shop-http-request.service';

describe('FakeShopHttpRequestService', () => {
  let service: FakeShopHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeShopHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
