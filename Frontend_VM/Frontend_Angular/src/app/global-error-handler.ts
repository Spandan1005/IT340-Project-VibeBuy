import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }

    handleError(error: any) {
        // Manually inject LoggingService to avoid circular dependency issues during instantiation
        const loggingService = this.injector.get(LoggingService);

        const message = error.message ? error.message : error.toString();
        const stack = error.stack ? error.stack : 'No stack trace';

        loggingService.error(`Unhandled Exception: ${message}`, { stack });

        // Re-throw (or log to console) so Angular standard error reporting still happens in dev
        console.error('GlobalErrorHandler:', error);
    }
}
