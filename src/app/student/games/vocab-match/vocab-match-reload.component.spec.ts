/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VocabMatchReloadComponent } from './vocab-match-reload.component';

describe('VocabMatchReloadComponent', () => {
  let component: VocabMatchReloadComponent;
  let fixture: ComponentFixture<VocabMatchReloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabMatchReloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabMatchReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
