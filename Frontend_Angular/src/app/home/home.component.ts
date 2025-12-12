import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    welcomeTitle = 'Shopping that feels like you';
    welcomeMessage = 'Discover products tailored to your unique vibe, mood, and lifestyle. AI-powered recommendations that get you.';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // Check if logged in to show personalized message
        const email = this.authService.currentUserEmail;
        if (this.authService.currentUserEmail) {
            // In a real app we might get the user name from the user object, but email split is what the original code did
            const name = email?.split('@')[0];
            this.welcomeTitle = `Welcome back, ${name}!`;
            this.welcomeMessage = 'Ready to discover products tailored to your vibe today?';
        }
    }
}
