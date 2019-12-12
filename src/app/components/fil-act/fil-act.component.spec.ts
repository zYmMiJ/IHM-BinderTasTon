import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilActComponent } from './fil-act.component';

describe('FilActComponent', () => {
  let component: FilActComponent;
  let fixture: ComponentFixture<FilActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilActComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
