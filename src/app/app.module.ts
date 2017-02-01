import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { environment } from '../environments/environment';;

import { AppComponent } from './app.component';

const imports: Array<any> = [
  BrowserModule,
  FormsModule,
  HttpModule
];

if (!environment.production) {
  imports.push(BaseRequestOptions);
  imports.push(MockBackend);
  imports.push({
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
    useFactory: (backend, options) => new Http(backend, options)
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
