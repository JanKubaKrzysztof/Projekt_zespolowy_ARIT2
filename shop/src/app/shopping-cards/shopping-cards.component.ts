import { Component, Input } from '@angular/core';
import { Product } from '../interface/interface';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.css'],
})
export class ShoppingCardsComponent {
  @Input() product: Product;
  constructor() {}
}
