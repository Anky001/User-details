import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export interface CookieDetails {
  cookieName: string;
  cookieValue?: string;
  expires?: number | Date;
}

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }

  public setCookies(cookieDetails: CookieDetails) {
    this.cookieService.set(cookieDetails.cookieName, cookieDetails.cookieValue);
  }

  public getCookies(cookieName: string): any {
    return this.cookieService.get(cookieName);
  }

  public deleteCookies(cookieName: string) {
    this.cookieService.delete(cookieName);
  }

  public isCookieValid(cookieName: string) {
    return this.cookieService.check(cookieName);
  }
}
