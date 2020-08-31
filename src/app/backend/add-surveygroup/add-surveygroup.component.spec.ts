import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveygroupComponent } from './add-surveygroup.component';

describe('AddSurveygroupComponent', () => {
  let component: AddSurveygroupComponent;
  let fixture: ComponentFixture<AddSurveygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveygroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
