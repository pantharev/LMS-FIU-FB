import { TestBed } from '@angular/core/testing';

import { CourseBrowserService } from './course-browser.service';

describe('CourseBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseBrowserService = TestBed.get(CourseBrowserService);
    expect(service).toBeTruthy();
  });
});
