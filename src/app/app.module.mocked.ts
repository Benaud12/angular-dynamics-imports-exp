import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';

import { LoadDataService } from './services/load-data.service';
import { MockedHttpServer } from './testing/mocked-http-server';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BaseRequestOptions,
    MockBackend,
    LoadDataService,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, options) => {
        return new MockedHttpServer(backend, options);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class MockedAppModule { }
