import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRootDefaultComponent } from './root-default.component';

describe('AppRootDefaultComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppRootDefaultComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRootDefaultComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pcmela'`, () => {
    const fixture = TestBed.createComponent(AppRootDefaultComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pcmela');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppRootDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pcmela!');
  });
});
