import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, concatMap, toArray, filter, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  cityUrl: string = 'assets/data/city-list.json';


  constructor(private http: HttpClient) { }

  search(queryString: string) {
    return this.http.get(this.cityUrl)
    .pipe(
      map((response) => JSON.parse(JSON.stringify(response))),
      concatMap(arr => from(arr)),
      filter(item => item['name'].toLowerCase().includes(queryString)),
      toArray()
    )
  }
}
