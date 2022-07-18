import { TestBed } from '@angular/core/testing';
import { BarChartComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BarChartComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BarChartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularPage'`, () => {
    const fixture = TestBed.createComponent(BarChartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularPage');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BarChartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularPage app is running!');
  });
});
