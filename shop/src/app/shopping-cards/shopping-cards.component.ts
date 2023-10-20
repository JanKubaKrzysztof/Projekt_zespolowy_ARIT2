import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/interface';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.css'],
})
export class ShoppingCardsComponent {
  @Input() product: Product;
  @Input() selectedProduct: boolean;
  @Output() newItemEvent = new EventEmitter<Product>();

  constructor() {}

  addProduct(product : Product) {
    this.newItemEvent.emit(product);
  }

  calculate(x: number) {
    return Math.round(x);
  }
}
