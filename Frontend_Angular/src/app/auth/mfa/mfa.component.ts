import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-mfa',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './mfa.component.html',
    styleUrl: './mfa.component.css'
})
export class MfaComponent implements OnInit {
    qrCodeUrl: string | null = null;
    token = '';
    errorMessage = '';
    isLoading = false;
    userId: string | null = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userId = this.authService.currentUserId;
        if (!this.userId) {
            this.router.navigate(['/auth/login']);
            return;
        }

        // Attempt setup (Back-end should handle if already setup vs new)
        // The previous implementation fetched setup regardless
        this.authService.setupMfa(this.userId).subscribe({
            next: (res) => {
                if (res.qrCode) {
                    this.qrCodeUrl = res.qrCode;
                }
            },
            error: (err) => {
                console.error('MFA Setup error', err);
                // If error might mean already setup, just let them verify
            }
        });
    }

    verify() {
        if (!this.userId || !this.token) return;

        this.isLoading = true;
        this.errorMessage = '';

        this.authService.verifyMfa(this.userId, this.token).subscribe({
            next: (res) => {
                if (res.verified) {
                    // Should update auth service or handle global state if needed
                    // But for now, redirect to Home/Shop
                    this.router.navigate(['/']);
                } else {
                    this.errorMessage = 'Invalid token';
                    this.isLoading = false;
                }
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Verification failed';
            }
        });
    }
}
