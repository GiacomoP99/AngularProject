import { TestBed } from '@angular/core/testing';

import { AtletaRepositoryService } from './atleta-repository.service';

describe('AtletaRepositoryService', () => {
  let service: AtletaRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtletaRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
