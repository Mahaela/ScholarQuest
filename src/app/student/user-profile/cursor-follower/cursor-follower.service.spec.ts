/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursorFollowerService } from './cursor-follower.service';

describe('CursorFollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursorFollowerService]
    });
  });

  it('should ...', inject([CursorFollowerService], (service: CursorFollowerService) => {
    expect(service).toBeTruthy();
  }));
});
