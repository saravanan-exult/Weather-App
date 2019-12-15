import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { of, fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';
  filteredCityData: any[] = [];

  @ViewChild('locationSearchInput', {static: false}) locationSearchInput: ElementRef;

  constructor(private searchService: SearchService) { }

  ngAfterViewInit() {
    fromEvent(this.locationSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      filter(res => res.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchService.search(text).subscribe(res => {
        console.log('res', res);
        this.filteredCityData = res;
      })
    })

  }
}
