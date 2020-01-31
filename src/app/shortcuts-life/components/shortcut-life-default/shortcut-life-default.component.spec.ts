import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutLifeDefaultComponent } from './shortcut-life-default.component';

describe('ShortcutLifeDefaultComponent', () => {
  let component: ShortcutLifeDefaultComponent;
  let fixture: ComponentFixture<ShortcutLifeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutLifeDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutLifeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
