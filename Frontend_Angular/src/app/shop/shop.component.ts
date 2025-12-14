import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../products.service';
import { LogClickDirective } from '../log-click.directive';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-shop',
    standalone: true,
    imports: [CommonModule, LogClickDirective],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
    activeProducts: Product[] = [];
    filteredProducts: Product[] = [];
    currentVibe = 'all';
    headerTitle = 'All Products';

    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.currentVibe = params['vibe'] || 'Chill Explorer';
            this.loadProducts();
        });
    }

    loadProducts() {
        this.productService.getProductsByVibe(this.currentVibe).subscribe(products => {
            this.activeProducts = products;
            this.filteredProducts = products;

            if (this.currentVibe === 'all') {
                this.headerTitle = 'All Products';
            } else {
                this.headerTitle = `${this.currentVibe} Collection`;
            }
        });
    }

    handleSearch(event: any) {
        const searchTerm = event.target.value.toLowerCase().trim();

        if (!searchTerm) {
            this.filteredProducts = this.activeProducts;
            return;
        }

        this.filteredProducts = this.activeProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        alert(`Added ${product.name} to cart!`);
    }
}
