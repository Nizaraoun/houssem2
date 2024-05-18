import { TestBed } from '@angular/core/testing';

import { DemandeStagiaireService } from './demande-stagiaire.service';

describe('DemandeStagiaireService', () => {
  let service: DemandeStagiaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeStagiaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
