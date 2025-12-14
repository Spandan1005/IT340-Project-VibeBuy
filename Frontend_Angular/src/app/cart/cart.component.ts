import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../cart.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
    cartItems: CartItem[] = [];
    total: number = 0;
    showCheckout: boolean = false;

    checkoutForm = {
        name: '',
        email: '',
        address: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    };

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.cartItems$.subscribe(items => {
            this.cartItems = items;
            this.total = this.cartService.getTotal();
        });
    }

    updateQuantity(item: CartItem, change: number) {
        this.cartService.updateQuantity(item.id, item.quantity + change);
    }

    removeItem(item: CartItem) {
        this.cartService.removeFromCart(item.id);
    }

    proceedToCheckout() {
        if (this.cartItems.length > 0) {
            this.showCheckout = true;
            // Scroll to checkout section
            setTimeout(() => {
                const element = document.getElementById('checkout-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }

    submitOrder() {
        alert('Thank you for your order! This is a dummy checkout.');
        this.cartService.clearCart();
        this.showCheckout = false;
    }
}
