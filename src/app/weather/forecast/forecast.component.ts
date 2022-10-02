import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../_services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private ForecastService:ForecastService) { }

  ngOnInit(): void {
  this.ForecastService.getcurrentlocation().subscribe((data)=>
    console.log(data)
    );
  }
}
