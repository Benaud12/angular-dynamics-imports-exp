import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { LoadDataService } from './services/load-data.service';

import { ApiMockModule } from './api-mock/api-mock.module';

const imports: Array<any> = [
  BrowserModule,
  FormsModule,
  HttpModule
];

if (!environment.production) {
  imports.push(ApiMockModule.forRoot());
}

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
