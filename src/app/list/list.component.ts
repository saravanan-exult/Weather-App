import { Component, Input, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WeatherService} from '../services/weather.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() cityList: any[];
  selectedCity: string;
  
  constructor(public dialog: MatDialog, private weatherService: WeatherService) { }

  ngOnInit() {
  }

  showInfo(city: string):void {
    this.selectedCity = city;
    this.weatherService.getWeatherData(city).subscribe(res => {
      console.log('res', res);
      this.openDialog(res);
    })
    console.log('city', city);
  }

  openDialog(data: object): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: {selectedCity: this.selectedCity, weatherData: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  today: object = new Date();
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
