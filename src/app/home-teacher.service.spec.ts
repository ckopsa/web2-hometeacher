import { TestBed, inject } from '@angular/core/testing';

import { HomeTeacherService } from './home-teacher.service';

describe('HomeTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeTeacherService]
    });
  });

  it('should ...', inject([HomeTeacherService], (service: HomeTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
