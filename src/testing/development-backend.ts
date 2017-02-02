import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { getMocks } from './mocks/mocks';

export class DevelopmentBackend {
  constructor(private backend: MockBackend,
    private options: BaseRequestOptions) {
    this.backend.connections.subscribe(this.parseRequest);
  }

  private requestResponsePair = getMocks();

  private parseRequest(connection: MockConnection) {
    let url: string = connection.request.url;
    let body: any = connection.request.getBody();
    let response = this.requestResponsePair[url];
    if (!response) {
      response = new Response(new ResponseOptions({ status: 404 }));
    }
    connection.mockRespond(response);
  }
}
