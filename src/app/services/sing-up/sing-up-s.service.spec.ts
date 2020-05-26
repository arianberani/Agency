import { TestBed } from '@angular/core/testing';

import {SingUpSService } from './sing-up-s.service';

describe('SingUpSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingUpSService = TestBed.get(SingUpSService);
    expect(service).toBeTruthy();
  });
});
