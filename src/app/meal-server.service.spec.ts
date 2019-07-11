import { TestBed } from '@angular/core/testing';

import { MealServerService } from './meal-server.service';

describe('MealServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealServerService = TestBed.get(MealServerService);
    expect(service).toBeTruthy();
  });
});
