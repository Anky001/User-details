import { Component, Input } from '@angular/core';
import { ProfileDetails } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  @Input() profileDetails: ProfileDetails;
}
