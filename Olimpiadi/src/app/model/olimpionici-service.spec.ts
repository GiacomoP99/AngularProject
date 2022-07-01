import { TestBed } from '@angular/core/testing';

import { OlimpioniciServiceService } from './olimpionici-service';

describe('OlimpioniciServiceService', () => {
  let service: OlimpioniciServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlimpioniciServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
