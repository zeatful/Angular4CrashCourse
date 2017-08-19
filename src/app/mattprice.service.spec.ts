import { TestBed, inject } from '@angular/core/testing';

import { MattpriceService } from './mattprice.service';

describe('MattpriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MattpriceService]
    });
  });

  it('should be created', inject([MattpriceService], (service: MattpriceService) => {
    expect(service).toBeTruthy();
  }));
});
