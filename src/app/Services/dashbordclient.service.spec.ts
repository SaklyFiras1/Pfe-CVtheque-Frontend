import { TestBed } from '@angular/core/testing';

import { DashbordclientService } from './dashbordclient.service';

describe('DashbordclientService', () => {
  let service: DashbordclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbordclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
