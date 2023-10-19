import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import User = firebase.User;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.isUserLoggedIn().subscribe((user) => {
      console.log(user);
      this.user = user as User;
    });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }
}
