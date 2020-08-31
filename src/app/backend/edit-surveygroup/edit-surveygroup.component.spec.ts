import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurveygroupComponent } from './edit-surveygroup.component';

describe('EditSurveygroupComponent', () => {
  let component: EditSurveygroupComponent;
  let fixture: ComponentFixture<EditSurveygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSurveygroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurveygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
