import { TestBed, inject } from '@angular/core/testing';

import { HomeTeacherResolverService } from './home-teacher-resolver.service';

describe('HomeTeacherResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeTeacherResolverService]
    });
  });

  it('should be created', inject([HomeTeacherResolverService], (service: HomeTeacherResolverService) => {
    expect(service).toBeTruthy();
  }));
});
