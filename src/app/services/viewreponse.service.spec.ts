import { TestBed } from '@angular/core/testing';

import { ViewreponseService } from './viewreponse.service';

describe('ViewreponseService', () => {
  let service: ViewreponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewreponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
