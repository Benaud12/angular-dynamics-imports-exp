// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

export const httpProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions],
  useFactory: (backend, options) => new Http(backend, options)
};

export const environment = {
  production: false,
  mockedProviders: [
    BaseRequestOptions,
    MockBackend,
    httpProvider
  ]
};
