import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // [BACKEND_VM_IP_ADDRESS]: In production, replace with actual IP. 
    // For local testing relative to localhost, use localhost:5000.
    // When deploying to Frontend VM, this must be the Backend VM IP.
    private apiUrl = 'http://192.168.10.20:5000/api';

    private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    public isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private http: HttpClient) { }

    private hasToken(): boolean {
        return !!localStorage.getItem('isLoggedIn');
    }

    get currentUserEmail(): string | null {
        return localStorage.getItem('userEmail');
    }

    get currentUserId(): string | null {
        return localStorage.getItem('userId');
    }

    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((response: any) => {
                if (response && response.user) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userId', response.user.id);
                    localStorage.setItem('userEmail', response.user.email);
                    this.isLoggedInSubject.next(true);
                }
            })
        );
    }

    register(userData: { name: string; email: string; password: string }): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, userData);
    }

    setupMfa(userId: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/mfa/setup`, { userId });
    }

    verifyMfa(userId: string, token: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/mfa/verify`, { userId, token });
    }

    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        this.isLoggedInSubject.next(false);
    }
}
