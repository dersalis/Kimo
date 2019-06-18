import { TestBed } from '@angular/core/testing';

import { FilmsNowService } from './films-now.service';

describe('FilmsNowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsNowService = TestBed.get(FilmsNowService);
    expect(service).toBeTruthy();
  });
});
