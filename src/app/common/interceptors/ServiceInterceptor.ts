import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { ErrorBroadcastService } from '../services/error-broadcast.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService,
                private errorBroadcastService: ErrorBroadcastService) {}
    /**
     * intercept all XHR request
     * @ param request
     * @ param next
     * @ returns {Observable<A>}
   */
    intercept(req: HttpRequest<any> , next: HttpHandler ): Observable<HttpEvent<any>> {
      const self = this;
      self.loaderService.showLoader();
        return next.handle(req).pipe(
            finalize(() => {
              this.loaderService.hideLoader();
            }),
            catchError((error) => {
              self.loaderService.hideLoader();
              let errorMessage = '';
              if (error.error instanceof ErrorEvent) {
                errorMessage = `Error: ${error.error.message}`;
              } else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
              }
              this.errorBroadcastService.showError.next(true);
              this.errorBroadcastService.errorMessage.next(errorMessage);
              return throwError(errorMessage);
          })
        );
    }
}
