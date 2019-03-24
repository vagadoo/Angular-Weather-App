import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeHoursForecastComponent } from './three-hours-forecast.component';

describe('ThreeHoursForecastComponent', () => {
  let component: ThreeHoursForecastComponent;
  let fixture: ComponentFixture<ThreeHoursForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeHoursForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeHoursForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
