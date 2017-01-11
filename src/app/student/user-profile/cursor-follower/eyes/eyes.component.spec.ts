/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EyesComponent } from './eyes.component';

describe('EyesComponent', () => {
  let component: EyesComponent;
  let fixture: ComponentFixture<EyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
