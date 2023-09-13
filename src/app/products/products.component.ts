import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  isLoggedIn: boolean = true;
  isAdditionalProductInfoHidden: boolean = false;
  products = [
    {
      id: 1,
      name: 'Samsung A51',
      category: 'Electronics',
      price: '$1000',
      tags: ['smart phone', 'mobile phone', 'samsung'],
    },
    {
      id: 2,
      name: 'Iphone 12 pro max',
      category: 'Electronics',
      price: '$2000',
      tags: ['smart phone', 'mobile phone', 'apple'],
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      category: 'Electronics',
      price: '$1400',
      tags: ['smart phone', 'mobile phone', 'google'],
    },
  ];
  showAdditionalData() {
    this.isAdditionalProductInfoHidden = !this.isAdditionalProductInfoHidden;
  }
  toggleTheUserAuthentication() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
