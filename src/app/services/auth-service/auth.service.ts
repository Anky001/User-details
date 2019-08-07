import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookiesService } from '../cookies-service/cookies.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = new Subject<boolean>();
  private jwthelperService = new JwtHelperService();

  constructor(private cookiesService: CookiesService, private router: Router) { }

  public isAuthenticated(): boolean {
    const token = this.cookiesService.getCookies('jwt_token');
    const isLoggedIn = !this.jwthelperService.isTokenExpired(token);

    this.isLoggedIn.next(isLoggedIn);
    return isLoggedIn;
  }

  public logout() {
    this.cookiesService.deleteCookies('jwt_token');
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('login');
  }
}
