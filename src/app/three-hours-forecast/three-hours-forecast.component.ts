import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../forecast';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'three-hours-forecast',
  templateUrl: './three-hours-forecast.component.html',
  styleUrls: ['./three-hours-forecast.component.css']
})
export class ThreeHoursForecastComponent implements OnInit {

  @Input() forecast: Forecast;
  start: Date;
  end: Date;
  condition: string;
  temperature: number;
  humidity: number;

  constructor() { }

  ngOnInit() {
    this.start = this.forecast.dateTime;
    this.condition = this.forecast.condition;
    this.temperature = this.forecast.temperature;
    this.humidity = this.forecast.humidity;

    // add 3 hours to create the end time
    const endTime = new Date(this.forecast.dateTime);
    endTime.setHours(this.start.getHours() + 3);
    this.end = endTime;

  }
}
