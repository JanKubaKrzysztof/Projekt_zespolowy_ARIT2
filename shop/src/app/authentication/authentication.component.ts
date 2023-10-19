import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  email: string = '';
  password: string = '';
  IsLogin: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  isLoginToggle(value: boolean) {
    this.IsLogin = value;
  }

  onSubmit() {
    if (this.IsLogin) {
      this.auth
        .signIn(this.email, this.password)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error registering:', error);
        });
    } else {
      this.auth
        .signUp(this.email, this.password)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch((error) => {
          console.error('Error registering:', error);
        });
    }
  }
}
