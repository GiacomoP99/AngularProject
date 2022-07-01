import { TestBed } from '@angular/core/testing';

import { SelezionatoreService } from './selezionatore.service';

describe('SelezionatoreService', () => {
  let service: SelezionatoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelezionatoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
