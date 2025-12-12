import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';
import { LoggingService } from '././logging.service';

export const loggingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const loggingService = inject(LoggingService);
    const startTime = Date.now();

    // Don't log requests TO the logging service to avoid infinite loops
    if (req.url.includes('api/logs')) {
        return next(req);
    }

    return next(req).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                const duration = Date.now() - startTime;
                loggingService.info(`HTTP Response: ${req.method} ${req.url}`, {
                    status: event.status,
                    durationMs: duration
                });
            }
        }),
        catchError((error: HttpErrorResponse) => {
            const duration = Date.now() - startTime;
            loggingService.error(`HTTP Error: ${req.method} ${req.url}`, {
                status: error.status,
                message: error.message,
                durationMs: duration
            });
            return throwError(() => error);
        })
    );
};