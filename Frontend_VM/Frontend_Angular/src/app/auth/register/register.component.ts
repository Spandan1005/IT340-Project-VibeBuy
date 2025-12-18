import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    name = '';
    email = '';
    password = '';
    confirmPassword = '';
    errorMessage = '';
    isLoading = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    onSubmit() {
        this.errorMessage = '';

        if (!this.name || !this.email || !this.password || !this.confirmPassword) {
            this.errorMessage = 'Please fill in all fields';
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match';
            return;
        }

        if (this.password.length < 8) {
            this.errorMessage = 'Password must be at least 8 characters';
            return;
        }

        this.isLoading = true;

        this.authService.register({
            name: this.name,
            email: this.email,
            password: this.password
        }).subscribe({
            next: () => {
                // Redirect to login on success
                this.router.navigate(['/auth/login']);
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Registration failed';
            }
        });
    }
}
