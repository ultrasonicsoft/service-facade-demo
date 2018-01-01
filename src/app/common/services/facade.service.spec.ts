import { TestBed, inject } from '@angular/core/testing';

import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacadeService]
    });
  });

  it('should be created', inject([FacadeService], (service: FacadeService) => {
    expect(service).toBeTruthy();
  }));
});
