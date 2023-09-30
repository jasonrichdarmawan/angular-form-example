import { TestBed } from '@angular/core/testing';

import { CheckIfNameExistsService } from './check-if-name-exists.service';

describe('CheckIfNameExistsService', () => {
  let service: CheckIfNameExistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIfNameExistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
