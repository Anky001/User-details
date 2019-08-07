import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../../services/cookies-service/cookies.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

    constructor(private cookiesService: CookiesService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.cookiesService.getCookies('jwt_token');
        if (token) {
            return next.handle(
                req.clone({
                    headers: req.headers.append('Authorization', 'Bearer ' + token)
                })
            );
        }
        return next.handle(req);
    }
}
