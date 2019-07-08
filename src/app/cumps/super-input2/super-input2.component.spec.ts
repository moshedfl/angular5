import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperInput2Component } from './super-input2.component';

describe('SuperInput2Component', () => {
  let component: SuperInput2Component;
  let fixture: ComponentFixture<SuperInput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperInput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
