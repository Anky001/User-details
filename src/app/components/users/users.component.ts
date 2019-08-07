import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details-service/user-details.service';
import { ProfileDetails } from 'src/app/models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public profileDetails: ProfileDetails;

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.profileDetails = {
      userId: 1,
      userName: 'Ankit Pant',
      userRole: 'Frontend Developer',
      userLocation: 'Amsterdam, Netherlands',
      userTechStack: ['#Angular', '#ionic', '#Hybrid', '#PWA'],
      userIntro: 'Heya! I am a frontend developer and like sing and play guitar.'
    };

    this.userDetailsService.getUserDetails();
  }

}
