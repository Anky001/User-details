import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/models/user-model';
import { HttpService } from '../../services/http-service/http.service';
import { CookiesService, CookieDetails } from '../../services/cookies-service/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private cookiesService: CookiesService, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  public login() {
    console.log(this.loginForm);
    if (this.loginForm.status !== 'VALID') {
      alert('Invalid details');
      return;
    }
    // this.httpService.postRequest('auth-user-response.json', {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
    // });
    this.httpService.getRequestWithObservable('auth-user-response.json')
      .subscribe((authDetails: AuthResponse) => {
        if (authDetails) {
          const cookiesDetails: CookieDetails = {
            cookieName: 'jwt_token',
            cookieValue: authDetails.jwt
          };

          this.cookiesService.setCookies(cookiesDetails);
          this.router.navigate(['users'], {
            queryParams: { userId: authDetails.userId }
          });
        }
      });
  }

}
