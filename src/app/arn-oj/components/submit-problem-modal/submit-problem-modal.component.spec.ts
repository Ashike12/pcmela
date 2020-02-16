import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProblemModalComponent } from './submit-problem-modal.component';

describe('SubmitProblemModalComponent', () => {
  let component: SubmitProblemModalComponent;
  let fixture: ComponentFixture<SubmitProblemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitProblemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProblemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
