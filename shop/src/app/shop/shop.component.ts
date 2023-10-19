import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FakeShopHttpRequestService } from '../../service/fake-shop-http-request.service';
import { Product } from '../interface/interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  isLoggedIn = false;
  products: Product[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private fakeShopService: FakeShopHttpRequestService,
  ) {
    this.authService.isUserLoggedIn().subscribe((user) => {
      this.isLoggedIn = !!user; // Update the value based on the authentication state
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth']);
      }
    });

    this.fakeShopService.getAllProducts().subscribe(() => {
      t;
    });
  }
}
