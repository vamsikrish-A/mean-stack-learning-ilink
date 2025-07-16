import { TestBed } from '@angular/core/testing';

import { Toast } from './toast';

describe('Toast', () => {
  let service: Toast;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toast);
  });
  // toasting the pop as on right side top in a web page.

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
