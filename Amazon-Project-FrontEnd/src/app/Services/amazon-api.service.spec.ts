import { TestBed } from '@angular/core/testing';

import { AmazonApiService } from './amazon-api.service';

describe('AmazonApiService', () => {
  let service: AmazonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
