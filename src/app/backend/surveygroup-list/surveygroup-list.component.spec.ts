import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveygroupListComponent } from './surveygroup-list.component';

describe('SurveygroupListComponent', () => {
  let component: SurveygroupListComponent;
  let fixture: ComponentFixture<SurveygroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveygroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveygroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
