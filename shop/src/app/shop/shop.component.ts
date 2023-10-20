import {Component, TemplateRef} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FakeShopHttpRequestService } from '../../service/fake-shop-http-request.service';
import { Product } from '../interface/interface';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  isLoggedIn = false;
  modalRef?: BsModalRef;
  products: Product[];
  selectedCategory: string = '';
  priceFrom: number | null = null;
  priceTo: number | null = null;
  selectedRating: string = '';
  categories = [
    { value: '', name: 'każda' },
    { value: 'jewelery', name: 'biżuteria' },
    { value: 'electronics', name: 'elektronika' },
    {
      value: "men's clothing",
      name: 'ubrania męskie',
    },
    {
      value: "women's clothing",
      name: 'ubrania kobiece',
    },
  ];

  selectedProducts: Product[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private fakeShopService: FakeShopHttpRequestService,
    private modalService: BsModalService
  ) {
    this.authService.isUserLoggedIn().subscribe((user) => {
      this.isLoggedIn = !!user; // Update the value based on the authentication state
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth']);
      }
    });

    this.fakeShopService.getAllProducts().subscribe((respone) => {
      this.products = respone;
    });
  }

  onSubmit() {
    this.fakeShopService
      .getProductsByCategory(this.selectedCategory)
      .subscribe((response) => {
        this.products = response;

        if (this.priceFrom) {
          this.products = this.products.filter(
            (e) => e.price >= this.priceFrom!,
          );
        }

        if (this.priceTo) {
          this.products = this.products.filter((e) => e.price <= this.priceTo!);
        }

        if (this.selectedRating) {
          this.products = this.products.filter(
            (e) => Math.round(e.rating.rate) >= +this.selectedRating!,
          );
        }
      });
  }

  receivedNumberOfProducts(product: Product) {
    this.selectedProducts.push(product);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
