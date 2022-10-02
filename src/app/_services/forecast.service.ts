import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor() {}
  getforecast() {
    return this.getcurrentlocation().pipe(
      map((coords: any) => {
        return new HttpParams()
        .set('appid','769ad267398bd5e267d7890ae58d7b8e')
        .set('units' , 'metric')
        .set('lon' , coords.longitude.tostring())
        .set('lat' , coords.latitude.tostring());
      })
    );
  }
  getcurrentlocation() {
    return new Observable((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    });
  }
}
