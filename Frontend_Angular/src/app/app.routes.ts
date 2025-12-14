import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MfaComponent } from './auth/mfa/mfa.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth/mfa', component: MfaComponent },
    { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
    // Redirect unknown routes to home
    { path: '**', redirectTo: '' }
];
