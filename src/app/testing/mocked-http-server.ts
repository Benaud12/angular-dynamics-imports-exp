import {
  BaseRequestOptions, Http,
  HttpModule, RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export class MockedHttpServer extends Http {

  constructor(protected _backend: MockBackend,
    protected _defaultOptions: BaseRequestOptions) {
    super(_backend, _defaultOptions);

    this.registerMocks();
  }

  private registerMocks(): void {
    this._backend.connections.subscribe((connection: MockConnection) => {
      const method: RequestMethod = connection.request.method;
      const url: string = connection.request.url;
      debugger;
    });
  }
}
