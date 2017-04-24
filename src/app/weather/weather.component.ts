import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city : string = "";
  state :  string = "";
  temperature : string = "";
  condition : string = "";
  wind : string = "";
  forecasts : Forecast[];

  constructor(private _sharedService : SharedService) {}

  ngOnInit() {
  }

  callWeatherService() {
    this._sharedService.getWeather(this.city, this.state).subscribe(result => {
      this.temperature = result["query"]["results"]["channel"]["item"]["condition"]["temp"];
      this.condition = result["query"]["results"]["channel"]["item"]["condition"]["text"];
      this.wind = result["query"]["results"]["channel"]["wind"]["speed"];
      this.forecasts = result["query"]["results"]["channel"]["item"]["forecast"];
      // console.log(result["query"]["results"]["channel"]["item"]["forecast"]);
    });
  }
}
