import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
  declarations: [
    ForecastComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports:[
    ForecastComponent
  ]
  }
)
export class WeatherModule { }
