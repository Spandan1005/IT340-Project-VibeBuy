import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LogEntry {
    level: 'INFO' | 'WARN' | 'ERROR';
    message: string;
    timestamp: string;
    details?: any;
    source: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    // [DEVOPS_VM_IP]: Replace 'localhost:9000' with actual DevOps VM IP/Port later
    // We assume there's an endpoint /api/logs accepting POST requests
    private devOpsUrl = 'http://localhost:9000/api/logs';

    constructor(private http: HttpClient) { }

    log(level: 'INFO' | 'WARN' | 'ERROR', message: string, details?: any) {
        const entry: LogEntry = {
            level,
            message,
            timestamp: new Date().toISOString(),
            details,
            source: 'Frontend_Angular'
        };

        console.log(`[${level}] ${message}`, details || '');

        // Fire and forget log to DevOps VM
        // We catch error to prevent log failures from breaking the app
        this.http.post(this.devOpsUrl, entry).subscribe({
            error: (err) => console.warn('Failed to send log to DevOps VM', err)
        });
    }

    info(message: string, details?: any) {
        this.log('INFO', message, details);
    }

    error(message: string, details?: any) {
        this.log('ERROR', message, details);
    }
}