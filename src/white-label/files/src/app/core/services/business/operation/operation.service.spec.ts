import { TestBed } from '@angular/core/testing';

import { OperationService } from './operation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OperationService', () => {
  let service: OperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
