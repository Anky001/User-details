import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly API_BASE_URL: string = '../assets/mock-jsons/';

  constructor(private httpClient: HttpClient) { }

  // HTTP request returning an Observable
  public getRequestWithObservable(url: string): Observable<any> {
    return this.httpClient.get(this.API_BASE_URL + url);
  }

  // HTTP request returning a promise
  public postRequest(url: string, body: object): Promise<object> {
    return this.httpClient.post(this.API_BASE_URL + url, body).toPromise();
  }
}
