import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products.service';

export interface CartItem extends Product {
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems = new BehaviorSubject<CartItem[]>([]);
    cartItems$ = this.cartItems.asObservable();

    constructor() { }

    addToCart(product: Product) {
        const currentItems = this.cartItems.value;
        const existingItem = currentItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
            this.cartItems.next([...currentItems]);
        } else {
            this.cartItems.next([...currentItems, { ...product, quantity: 1 }]);
        }
    }

    removeFromCart(productId: number) {
        const currentItems = this.cartItems.value;
        this.cartItems.next(currentItems.filter(item => item.id !== productId));
    }

    updateQuantity(productId: number, quantity: number) {
        const currentItems = this.cartItems.value;
        const item = currentItems.find(item => item.id === productId);

        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.cartItems.next([...currentItems]);
            }
        }
    }

    clearCart() {
        this.cartItems.next([]);
    }

    getTotal(): number {
        return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
