import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BackendMockService } from './backend-mock.service';

export function BackendServiceFactory(injector: Injector): XHRBackend {
  const mockService = new BackendMockService(injector);
  return <XHRBackend>mockService;
}

@NgModule({
  providers: [{
    provide: XHRBackend,
    useFactory: BackendServiceFactory,
    deps: [Injector]
  }]
})
export class ApiMockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiMockModule,
      providers: [
      ]
    };
  }
}
