import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) { }

  getWeatherData(queryString: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + queryString + '&appid=9c991b6bd94f3aaa0404914bfcf7e315')
  }
}
