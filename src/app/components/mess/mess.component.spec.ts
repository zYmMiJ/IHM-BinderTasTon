import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessComponent } from './mess.component';

describe('MessComponent', () => {
  let component: MessComponent;
  let fixture: ComponentFixture<MessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
