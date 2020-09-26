import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbersPage } from './barbers.page';

describe('BarbersPage', () => {
  let component: BarbersPage;
  let fixture: ComponentFixture<BarbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
