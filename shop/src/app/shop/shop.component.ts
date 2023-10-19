import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isUserLoggedIn().subscribe((user) => {
      console.log(user)
      this.isLoggedIn = !!user; // Update the value based on the authentication state
      if (!this.isLoggedIn ){
          this.router.navigate(['/auth'])
      }
    });
  }
}
