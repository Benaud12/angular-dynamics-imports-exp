import { Injector } from '@angular/core';
import { Observable } from 'rxjs/observable';
import {
  BrowserXhr, Connection, ReadyState,
  Response, ResponseOptions, Request,
  XHRBackend, XHRConnection, XSRFStrategy
} from '@angular/http';

export class BackendMockService extends XHRBackend {

  private _browserXhr: BrowserXhr;

  constructor(private injector: Injector) {
    super(injector.get(BrowserXhr),
      injector.get(ResponseOptions),
      injector.get(XSRFStrategy));

    this._browserXhr = injector.get(BrowserXhr);
  }

  public createConnection(req: Request): XHRConnection {
    let response: Observable<Response>;

    // do something with response and set body.

    return new XHRConnection(req, this._browserXhr,
      new ResponseOptions({
        body: {},
        status: 200
      }));
  }
}