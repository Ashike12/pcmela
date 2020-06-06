import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusStatsLocalComponent } from './coronavirus-stats-local.component';

describe('CoronavirusStatsLocalComponent', () => {
  let component: CoronavirusStatsLocalComponent;
  let fixture: ComponentFixture<CoronavirusStatsLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronavirusStatsLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusStatsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
