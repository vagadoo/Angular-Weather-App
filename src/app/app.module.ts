import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component';
import { ThreeHoursForecastComponent } from './three-hours-forecast/three-hours-forecast.component';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatExpansionModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FiveDaysForecastComponent,
    ThreeHoursForecastComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [WeatherService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
