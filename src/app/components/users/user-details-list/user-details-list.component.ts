import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserDetails } from 'src/app/models/user-model';
import { UserDetailsService } from '../../../services/user-details-service/user-details.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit, OnDestroy {
  public userDetailsSubscription: Subscription;
  public userDetailsList: UserDetails[];

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.userDetailsSubscription = this.userDetailsService.userDetailsBehaviourSubject
      .subscribe((userDetails: UserDetails[]) => {
        this.userDetailsList = userDetails;
      });
  }

  ngOnDestroy() {
    this.userDetailsSubscription.unsubscribe();
  }
}
