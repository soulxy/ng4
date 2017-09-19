import { TestBed, inject } from '@angular/core/testing';

import { CodeTreeService } from './code-tree.service';

describe('CodeTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeTreeService]
    });
  });

  it('should be created', inject([CodeTreeService], (service: CodeTreeService) => {
    expect(service).toBeTruthy();
  }));
});
