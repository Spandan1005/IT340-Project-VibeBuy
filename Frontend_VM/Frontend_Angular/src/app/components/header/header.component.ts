import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.isLoggedIn$.subscribe(status => {
            this.isLoggedIn = status;
        });
    }

    logout() {
        this.authService.logout();
        window.location.reload(); // Simple reload to clear state, or navigate to home
    }
}
