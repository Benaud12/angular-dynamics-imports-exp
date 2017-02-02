import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { MockedAppModule } from './app/app.module.mocked';
import 'zone.js';

platformBrowserDynamic().bootstrapModule(MockedAppModule);
