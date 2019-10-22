import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Try2Component } from './try2.component';

describe('Try2Component', () => {
  let component: Try2Component;
  let fixture: ComponentFixture<Try2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Try2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Try2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
