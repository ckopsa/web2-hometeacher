import { TestBed, inject } from '@angular/core/testing';

import { CompanionshipService } from './companionship.service';

describe('CompanionshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanionshipService]
    });
  });

  it('should ...', inject([CompanionshipService], (service: CompanionshipService) => {
    expect(service).toBeTruthy();
  }));
});
