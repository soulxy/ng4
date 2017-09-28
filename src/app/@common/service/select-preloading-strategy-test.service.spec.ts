import { TestBed, inject } from '@angular/core/testing';

import { SelectPreloadingStrategyTestService } from './select-preloading-strategy-test.service';

describe('SelectPreloadingStrategyTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectPreloadingStrategyTestService]
    });
  });

  it('should be created', inject([SelectPreloadingStrategyTestService], (service: SelectPreloadingStrategyTestService) => {
    expect(service).toBeTruthy();
  }));
});
