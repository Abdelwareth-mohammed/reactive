import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComp2Component } from './form-comp2.component';

describe('FormComp2Component', () => {
  let component: FormComp2Component;
  let fixture: ComponentFixture<FormComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
