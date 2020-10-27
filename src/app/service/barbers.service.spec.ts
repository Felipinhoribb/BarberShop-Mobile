import { TestBed } from '@angular/core/testing';

import { BarbersService } from './barbers.service';

describe('BarbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarbersService = TestBed.get(BarbersService);
    expect(service).toBeTruthy();
  });
});
