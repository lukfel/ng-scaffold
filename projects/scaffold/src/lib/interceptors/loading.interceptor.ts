import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ScaffoldService } from '../services';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private activeRequests = 0;
  private loadingDelay = 100; // milliseconds
  private spinnerTimeout: any;

  constructor(private scaffoldService: ScaffoldService) { }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.activeRequests++;

    // Set a delayed spinner timeout
    if (this.activeRequests === 1) {
      this.spinnerTimeout = setTimeout(() => {
        this.scaffoldService.updateScaffoldProperty('loading', true);
      }, this.loadingDelay);
    }

    return next.handle(req).pipe(
      // tap({
      //   next: (event) => {
      //     if (event instanceof HttpResponse) {
      //       // Successful response
      //     }
      //   },
      //   error: (error: HttpErrorResponse) => {
      //     // Handle error if needed
      //   }
      // }),
      finalize(() => {
        this.activeRequests--;

        if (this.activeRequests === 0) {
          // Clear any pending spinner timeout
          clearTimeout(this.spinnerTimeout);
          this.scaffoldService.updateScaffoldProperty('loading', false);
        }
      })
    );
  }
}
