import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutLifeTextToJsonComponent } from './shortcut-life-text-to-json.component';

describe('ShortcutLifeTextToJsonComponent', () => {
  let component: ShortcutLifeTextToJsonComponent;
  let fixture: ComponentFixture<ShortcutLifeTextToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutLifeTextToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutLifeTextToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
