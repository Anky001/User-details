import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { BehaviorSubject } from 'rxjs';
import { UserDetails } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public userDetailsBehaviourSubject = new BehaviorSubject<UserDetails[]>(null);
  constructor(private httpService: HttpService) { }

  public getUserDetails() {
    this.httpService.getRequestWithObservable('users-list-response.json').toPromise()
      .then((userDetails: UserDetails[]) => {
        this.userDetailsBehaviourSubject.next(userDetails);
      }).catch((error) => {
        console.error(error);
      });
  }
}
