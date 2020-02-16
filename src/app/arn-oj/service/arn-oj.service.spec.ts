import { TestBed } from '@angular/core/testing';

import { ArnOjService } from './arn-oj.service';

describe('ArnOjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArnOjService = TestBed.get(ArnOjService);
    expect(service).toBeTruthy();
  });
});
