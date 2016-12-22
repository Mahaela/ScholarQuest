/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpSignupService } from './http-signup.service';

describe('HttpSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSignupService]
    });
  });

  it('should ...', inject([HttpSignupService], (service: HttpSignupService) => {
    expect(service).toBeTruthy();
  }));
});
