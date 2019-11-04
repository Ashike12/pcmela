import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutLifeUploadQuestionComponent } from './shortcut-life-upload-question.component';

describe('ShortcutLifeUploadQuestionComponent', () => {
  let component: ShortcutLifeUploadQuestionComponent;
  let fixture: ComponentFixture<ShortcutLifeUploadQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutLifeUploadQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutLifeUploadQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
