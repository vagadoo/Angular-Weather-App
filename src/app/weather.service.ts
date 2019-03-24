import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Forecast } from './forecast';

@Injectable()
export class WeatherService {

  public apiUrl: string;
  public apiKey: string;
  public cityId: string;

  constructor(private http: HttpClient) {
    this.cityId = '3333229';  // cityId for Edinburgh
    this.apiKey = 'ca8563692c5205e1d1d37c433e4f8500';
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&APPID=' + this.apiKey + '&units=metric';
  }

  httpOptions = {
    headers: new HttpHeaders()
  };

  getFiveDaysForecasts(): Observable<Forecast[]> {
    const forecasts: Array<Forecast> = new Array<Forecast>();
    return this.http.get<Forecast[]>(this.apiUrl, this.httpOptions)
    .map(function(data: any) {
      console.log(data);
      for (const apiForecast of data.list) {
        const newForecast: Forecast =
        new Forecast(
          apiForecast.weather[0].description,
          Math.floor(apiForecast.wind.speed),
          Math.floor(apiForecast.main.humidity),
          Math.floor(apiForecast.main.temp),
          new Date(apiForecast.dt_txt)
        );
        forecasts.push(newForecast);
      }
      return forecasts;
    });
  }
}
