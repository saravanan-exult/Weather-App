import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if(unit === 'C'){
      var tempareature = value - 273.15;
      return tempareature.toFixed(1) + ' °C';
    }
    return null;
  }

}
