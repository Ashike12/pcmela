import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnOjDefaultComponent } from './arn-oj-default.component';

describe('ArnOjDefaultComponent', () => {
  let component: ArnOjDefaultComponent;
  let fixture: ComponentFixture<ArnOjDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArnOjDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArnOjDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
