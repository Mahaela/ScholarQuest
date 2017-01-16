/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursorComponent } from './cursor.component';

describe('CursorComponent', () => {
  let component: CursorComponent;
  let fixture: ComponentFixture<CursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
