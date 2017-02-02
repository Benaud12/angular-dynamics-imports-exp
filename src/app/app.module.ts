import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { LoadDataService } from './services/load-data.service';

const imports: Array<any> = [
  BrowserModule,
  FormsModule,
  HttpModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: imports,
  providers: [
    LoadDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
