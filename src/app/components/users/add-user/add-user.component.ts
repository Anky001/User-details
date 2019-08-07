import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDetailsService } from '../../../services/user-details-service/user-details.service';
import { UserDetails } from 'src/app/models/user-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public registrationForm: FormGroup;
  public isLoading: boolean;
  constructor(private snackBar: MatSnackBar, private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.isLoading = false;
    this.initRegistrationForm();
  }

  public initRegistrationForm() {
    this.registrationForm = new FormGroup({
      userId: new FormControl('5', { validators: [Validators.required, Validators.maxLength(20)] }),
      userName: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)] }),
      userDOB: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)] }),
      houseNumber: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)] }),
      street: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)] }),
      postalCode: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)] }),
    });
  }

  public addUser() {

    // Getting the value of the Behaviour Subject
    const userDetails: UserDetails[] = this.userDetailsService.userDetailsBehaviourSubject.value;

    const newUser: UserDetails = {
      userId: this.registrationForm.value.userId,
      userName: this.registrationForm.value.userName,
      userDOB: this.registrationForm.value.userDOB,
      userAddress: {
        houseNumber: this.registrationForm.value.houseNumber,
        street: this.registrationForm.value.street,
        postalCode: this.registrationForm.value.postalCode
      }
    };

    // Updating the new user in userDetails array
    userDetails.push(newUser);

    // Emmitting the changes to the subscribers
    this.userDetailsService.userDetailsBehaviourSubject.next(userDetails);

    this.showLoading();
    this.registrationForm.reset();
  }

  private showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open('User added successfully', '', {
        duration: 2000
      });
    }, 2000);
  }

}
