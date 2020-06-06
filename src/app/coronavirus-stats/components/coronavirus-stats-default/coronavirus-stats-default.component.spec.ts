import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusStatsDefaultComponent } from './coronavirus-stats-default.component';

describe('CoronavirusStatsDefaultComponent', () => {
  let component: CoronavirusStatsDefaultComponent;
  let fixture: ComponentFixture<CoronavirusStatsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusStatsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusStatsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
