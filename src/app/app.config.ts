import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MyInterceptor1 } from './interceptors/my-interceptor1';
import { RetryInterceptor } from './interceptors/retry-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ]
};
