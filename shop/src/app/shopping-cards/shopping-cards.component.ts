import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/interface';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.css'],
})
export class ShoppingCardsComponent {
  @Input() product: Product;
  @Output() newItemEvent = new EventEmitter<number>();

  NumberOfProducts = 0;

  constructor() {}

  addProduct() {
    this.newItemEvent.emit();
  }

  calculate(x: number) {
    return Math.round(x);
  }
}
