import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomUpdate2Component } from './dom-update2.component';

describe('DomUpdate2Component', () => {
  let component: DomUpdate2Component;
  let fixture: ComponentFixture<DomUpdate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomUpdate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomUpdate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
