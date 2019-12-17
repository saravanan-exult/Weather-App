import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import {WeatherService} from './services/weather.service';
import { ListComponent } from './list/list.component';
import {DialogOverviewExampleDialog} from './list/list.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DialogOverviewExampleDialog,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [SearchService, WeatherService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
