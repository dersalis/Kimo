import { TestBed } from '@angular/core/testing';

import { FilmsPromService } from './films-prom.service';

describe('FilmsPromService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsPromService = TestBed.get(FilmsPromService);
    expect(service).toBeTruthy();
  });
});
