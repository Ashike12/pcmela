import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntegrationsDefaultComponent } from './api-integrations-default.component';

describe('ApiIntegrationsDefaultComponent', () => {
  let component: ApiIntegrationsDefaultComponent;
  let fixture: ComponentFixture<ApiIntegrationsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIntegrationsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIntegrationsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
