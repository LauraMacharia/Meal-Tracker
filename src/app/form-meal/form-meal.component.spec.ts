import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMealComponent } from './form-meal.component';

describe('FormMealComponent', () => {
  let component: FormMealComponent;
  let fixture: ComponentFixture<FormMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
