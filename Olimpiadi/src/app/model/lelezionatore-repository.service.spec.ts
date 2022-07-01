import { TestBed } from '@angular/core/testing';

import { LelezionatoreRepositoryService } from './lelezionatore-repository.service';

describe('LelezionatoreRepositoryService', () => {
  let service: LelezionatoreRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LelezionatoreRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
