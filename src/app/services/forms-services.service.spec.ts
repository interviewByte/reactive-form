import { TestBed } from '@angular/core/testing';

import { FormsServicesService } from './forms-services.service';

describe('FormsServicesService', () => {
  let service: FormsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
