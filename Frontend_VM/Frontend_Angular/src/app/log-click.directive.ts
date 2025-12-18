import { Directive, HostListener, Input } from '@angular/core';
import { LoggingService } from './logging.service';

@Directive({
    selector: '[appLogClick]',
    standalone: true
})
export class LogClickDirective {
    @Input('appLogClick') actionName: string = 'Unknown Action';

    constructor(private loggingService: LoggingService) { }

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        this.loggingService.info(`User Action: ${this.actionName}`, {
            eventType: 'click',
            x: event.clientX,
            y: event.clientY,
            target: (event.target as HTMLElement).tagName
        });
    }
}
