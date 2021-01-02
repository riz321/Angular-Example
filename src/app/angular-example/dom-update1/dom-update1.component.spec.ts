import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomUpdate1Component } from './dom-update1.component';

describe('DomUpdate1Component', () => {
  let component: DomUpdate1Component;
  let fixture: ComponentFixture<DomUpdate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomUpdate1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomUpdate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
