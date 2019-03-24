import { Component, NgModule, OnInit, Input } from '@angular/core';
import { Forecast} from '../forecast';
import { WeatherService } from '../weather.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.css']
})

export class FiveDaysForecastComponent implements OnInit {
    city: string;
    threeHourForecasts: Array<Forecast>;
    fiveDaysForcasts: Array<Array<Forecast>>;

    constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getFiveDaysForecasts().subscribe(threeHourForecast => {
        this.threeHourForecasts = threeHourForecast;
        this.calculateFiveDaysForecasts();
    });
  }

  getAverageDayTemperature(dayForecasts: Forecast[]): string {
    let sumTemperature = 0;
    for (const forecast of dayForecasts) {
      sumTemperature = sumTemperature + forecast.temperature;
    }
    return (Math.floor(sumTemperature / dayForecasts.length)).toString();
  }

  calculateFiveDaysForecasts() {
    this.fiveDaysForcasts = new Array<Array<Forecast>>();

    this.fiveDaysForcasts[0] = new Array<Forecast>();
    let dateCounter = 0;
    for (let i = 0; i < this.threeHourForecasts.length; i++) {
        const currentThreeHourForecast = this.threeHourForecasts[i];
        let previousThreeHourForecast: Forecast;
        if (i > 0) {
            previousThreeHourForecast = this.threeHourForecasts[i - 1];
        }

        this.fiveDaysForcasts[dateCounter].push(currentThreeHourForecast);

        const isNextDay: Boolean = (previousThreeHourForecast != null &&
                                    previousThreeHourForecast.dateTime.getDate() < currentThreeHourForecast.dateTime.getDate());

        if (previousThreeHourForecast != null && isNextDay) {
            dateCounter++;
            this.fiveDaysForcasts[dateCounter] = new Array<Forecast>();
        }

      }
  }
}
