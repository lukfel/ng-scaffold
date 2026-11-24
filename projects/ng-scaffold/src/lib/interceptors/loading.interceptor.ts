import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ScaffoldLibraryConfig } from '../models';
import { CONFIG } from '../scaffold.config';
import { Logger, SKIP_SERVER_LOGGING, ScaffoldService } from '../services';

@Service({ autoProvided: false })
export class ScaffoldLoadingInterceptor implements HttpInterceptor {
  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });
  private scaffoldService = inject(ScaffoldService);
  private logger = inject(Logger);

  private activeRequests = 0;
  private loadingDelay = 100; // milliseconds
  private spinnerTimeout: ReturnType<typeof setTimeout>;

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Error reports run in the background, a spinner would announce them
    if (req.context.get(SKIP_SERVER_LOGGING)) return next.handle(req);

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
        this.activeRequests = Math.max(0, this.activeRequests - 1);
        if (this.libraryConfig?.debugging)
          this.logger.log(
            `[Loading - Finalize] ${req.url}, Active requests now: ${this.activeRequests}`,
          );

        if (this.activeRequests === 0) {
          clearTimeout(this.spinnerTimeout);
          this.scaffoldService.updateScaffoldProperty('loading', false);
        }
      }),
    );
  }
}
