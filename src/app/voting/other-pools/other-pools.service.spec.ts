import { TestBed, inject } from '@angular/core/testing';

import { OtherPoolsService } from './other-pools.service';

describe('OtherPoolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherPoolsService]
    });
  });

  it('should be created', inject([OtherPoolsService], (service: OtherPoolsService) => {
    expect(service).toBeTruthy();
  }));
});
